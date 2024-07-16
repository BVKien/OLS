using AutoMapper;
using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;
using BusinessObject.Models;
using DataAccess.Dao.ModelDao;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace DataAccess.Dao.AuthDao
{
    public class AuthDao
    {
        private readonly IMapper _mapper;
        private readonly UserDao _userDao;

        public AuthDao(IMapper mapper, UserDao userDao)
        {
            _mapper = mapper;
            _userDao = userDao;
        }

        // login 
        public LoginDtoInfoForAuth Login(string email, string password)
        {
            try
            {
                var user = _userDao.GetUserByEmailAndPassword(email, password);
                if (user == null)
                {
                    throw new Exception("Invalid email or password.");
                }

                var userLogin = _mapper.Map<LoginDtoInfoForAuth>(user);
                return userLogin;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // register 
        public RegisterDtoInfoForAuth Register(RegisterDtoForAuth register)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var user = context.Users
                        .Where(u => u.Email == register.Email)
                        .Include(u => u.UserRoleRole)
                        .FirstOrDefault();

                    if (user != null)
                    {
                        throw new Exception("User already exists.");
                    }

                    var newUser = _mapper.Map<User>(register);
                    context.Users.Add(newUser);
                    context.SaveChanges();

                    var userRgt = _userDao.GetUserByEmailAndPassword(newUser.Email, newUser.Password);
                    var userRgtInfo = _mapper.Map<RegisterDtoInfoForAuth>(userRgt);
                    return userRgtInfo;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // send verification code 
        public void SendVerificationCode(string email)
        {
            using (var context = new OLS_PRN231_V1Context())
            {
                var user = context.Users.FirstOrDefault(u => u.Email == email);

                if (user == null)
                {
                    throw new Exception("Invalid email or password.");
                }

                // Generate verification code
                var verificationCode = Guid.NewGuid().ToString().Substring(0, 6);
                user.CodeVerify = verificationCode;

                context.SaveChanges();

                // Send verification code via email
                SendEmail(email, verificationCode);
            }
        }

        // send to email address 
        private async void SendEmail(string email, string verificationCode)
        {
            string fromEmail = "tung2832002@gmail.com"; //jinchuriki18plus
            string password = "kbwztyaqcqshvngy"; // traxnginhquxz

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(fromEmail, password),
                EnableSsl = true,
                Timeout = 10000
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(fromEmail, "Online Learning System"),
                Subject = "Email Verification",
                Body = $"<html><body><p>Your verification code is: <strong>{verificationCode}</strong></p></body></html>",
                IsBodyHtml = true,
                BodyEncoding = Encoding.UTF8,
                SubjectEncoding = Encoding.UTF8
            };

            mailMessage.To.Add(new MailAddress(email));

            try
            {
                await smtpClient.SendMailAsync(mailMessage);
                Console.WriteLine("Email sent successfully.");
            }
            catch (SmtpException smtpEx)
            {
                Console.WriteLine("SMTP error: " + smtpEx.Message);
                throw new Exception("Failed to send email due to SMTP error: " + smtpEx.Message, smtpEx);
            }
            catch (Exception ex)
            {
                Console.WriteLine("General error: " + ex.Message);
                throw new Exception("Failed to send email: " + ex.Message, ex);
            }
        }

        // verify 
        public bool VerifyCode(string email, string code)
        {
            using (var context = new OLS_PRN231_V1Context())
            {
                var user = context.Users.FirstOrDefault(u => u.Email == email && u.CodeVerify == code);

                if (user == null)
                {
                    return false;
                }

                // Clear verification code
                user.CodeVerify = code;
                context.SaveChanges();

                return true;
            }
        }

        // reset password 
        public void ResetPassword(ResetPasswordDtoForAuth info)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    bool verify = VerifyCode(info.Email, info.CodeVerify);
                    if (verify == false)
                    {
                        throw new Exception("Invalid verification code.");
                    }

                    var user = context.Users
                        .Where(u => u.Email == info.Email)
                        .FirstOrDefault();

                    user.Password = info.NewPassword;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
