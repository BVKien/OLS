using BusinessObject.Dtos.UserDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/user")]
    public class UserAdminController : Controller
    {
        private readonly IUserRepository _repo;
        public UserAdminController(IUserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_user")]
        public ActionResult<IEnumerable<UserReadDtoForAdmin>> GetAllUser()
        {
            try
            {
                var list = _repo.GetAllUser();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_user_detail/{user_id}")]
        public ActionResult<IEnumerable<UserReadDtoForAdmin>> GetUserDetail(int user_id)
        {
            try
            {
                var user = _repo.GetUserDetailByUserIdForAdmin(user_id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_user")]
        public IActionResult CreateUser(UserCreateDtoForAdmin user)
        {
            try
            {
                _repo.CreateUser(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_user/{user_id}")]
        public IActionResult UpdateUser(int user_id, UserUpdateDtoForAdmin user)
        {
            try
            {
                _repo.UpdateUser(user_id, user);
                var response = new
                {
                    UserId = user_id,
                    UserInfo = user
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("ban_user/{user_id}/{role_id}")]
        public IActionResult BanUser(int user_id, int role_id)
        {
            try
            {
                _repo.BanUser(user_id, role_id);
                var response = new
                {
                    UserId = user_id,
                    RoleId = role_id,
                    Status = 0,
                    Msg = "Ban user successfully."
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("unban_user/{user_id}/{role_id}")]
        public IActionResult UnBanUser(int user_id, int role_id)
        {
            try
            {
                _repo.UnBanUser(user_id, role_id);
                var response = new
                {
                    UserId = user_id,
                    RoleId = role_id,
                    Status = 1,
                    Msg = "Unban user successfully."
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_user/{user_id}/{role_id}")]
        public IActionResult DeleteUser(int user_id, int role_id)
        {
            try
            {
                _repo.DeleteUser(user_id, role_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
