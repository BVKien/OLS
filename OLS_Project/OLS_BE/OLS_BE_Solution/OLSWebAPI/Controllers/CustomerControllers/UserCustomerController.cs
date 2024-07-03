using BusinessObject.Dtos.UserDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/user")]
    public class UserCustomerController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public UserCustomerController(IUserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_user_info/{user_id}")]
        public ActionResult<IEnumerable<UserReadDtoForCustomer>> GetUserInfo(int user_id)
        {
            try
            {
                var user = _repo.GetUserInfoByUserIdForCustomer(user_id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_user_info/{user_id}")]
        public IActionResult UpdateUserInfo(int user_id, UserUpdateDtoForCustomer user)
        {
            try
            {
                _repo.UpdateUserDetailByUserIdForCustomer(user_id, user);
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
    }
}
