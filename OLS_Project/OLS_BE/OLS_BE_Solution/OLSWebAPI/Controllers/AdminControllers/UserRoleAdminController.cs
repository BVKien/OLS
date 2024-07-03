using BusinessObject.Dtos.UserRoleDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/user_role")]
    public class UserRoleAdminController : ControllerBase
    {
        private readonly IUserRoleRepository _repo;
        public UserRoleAdminController(IUserRoleRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_user_role")]
        public ActionResult<IEnumerable<UserRoleReadDtoForAdmin>> GetAllUserRole()
        {
            try
            {
                var list = _repo.GetAllUserRole();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_user_role_detail/{role_id}")]
        public ActionResult<IEnumerable<UserRoleReadDtoForAdmin>> GetAllUserRoleDetail(int role_id)
        {
            try
            {
                var ur = _repo.GetUserRoleByUserRoleId(role_id);
                return Ok(ur);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_user_role")]
        public IActionResult CreateUserRole(UserRoleCretaeDtoForAdmin ur)
        {
            try
            {
                _repo.CreateUserRole(ur);
                return Ok(ur);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_user_role/{role_id}")]
        public IActionResult UpdateUserRole(int role_id, UserRoleUpdateDtoForAdmin ur)
        {
            try
            {
                _repo.UpdateUserRole(role_id, ur);
                var response = new
                {
                    UserRoleId = role_id,
                    UserRoleInfo = ur
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_user_role/{role_id}")]
        public IActionResult DeleteUserRole(int role_id)
        {
            try
            {
                _repo.DeleteUserRole(role_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
