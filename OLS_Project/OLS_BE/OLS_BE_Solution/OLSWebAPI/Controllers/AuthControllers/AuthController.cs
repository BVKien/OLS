using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Repository.Services.Interfaces.AuthInterfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using OLSWebAPI.Helper;

namespace OLSWebAPI.Controllers.AuthControllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _configuration;
        public AuthController(IAuthRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDtoForAuth loginDto)
        {
            try
            {
                var hashedPassword = HelperFunctions.CreateMD5(loginDto.Password);
                var userLogin = _repo.Login(loginDto.Email, hashedPassword);

                if (userLogin != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, loginDto.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(ClaimTypes.Role, userLogin.RoleName)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        issuer: _configuration["Jwt:Issuer"],
                        audience: _configuration["Jwt:Audience"],
                        claims: claims,
                        expires: DateTime.Now.AddMinutes(30),
                        signingCredentials: creds);

                    var tokenGenerate = new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token)
                    };

                    var response = new
                    {
                        Token = tokenGenerate,
                        User = userLogin,
                    };

                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDtoForAuth register)
        {
            try
            {
                // Hash the password using MD5
                var hashedPassword = HelperFunctions.CreateMD5(register.Password);
                var registerRequest = new RegisterDtoForAuth
                {
                    Email = register.Email,
                    Password = hashedPassword,
                    FullName = register.FullName,
                    UserRoleRoleId = 2
                };
                var userRgt = _repo.Register(registerRequest);

                var response = new
                {
                    User = userRgt
                };

                return Ok(userRgt);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("send_verification_code")]
        public IActionResult SendVerificationCode([FromBody] SendVerificationCodeDto dto)
        {
            try
            {
                _repo.SendVerificationCode(dto.Email);
                return Ok("Verification code sent.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("verify_code")]
        public IActionResult VerifyCode([FromBody] VerifyCodeDto dto)
        {
            try
            {
                var isValid = _repo.VerifyCode(dto.Email, dto.Code);
                if (isValid)
                {
                    return Ok("Email verified successfully.");
                }
                else
                {
                    return BadRequest("Invalid or expired verification code.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("reset_password")]
        public IActionResult ResetPassword(ResetPasswordDtoForAuth info)
        {
            try
            {
                var hashedPassword = HelperFunctions.CreateMD5(info.NewPassword);

                var resetInfo = new ResetPasswordDtoForAuth
                {
                    Email = info.Email,
                    CodeVerify = info.CodeVerify,
                    NewPassword = hashedPassword
                };
                _repo.ResetPassword(resetInfo);

                var response = new
                {
                    User = resetInfo,
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
