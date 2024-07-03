using BusinessObject.Dtos.DiscussDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/customer/discuss")]
    public class DiscussAdminController : ControllerBase
    {
        private readonly IDiscussRepository _repo;
        public DiscussAdminController(IDiscussRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("create_discussion")]
        public IActionResult CreateDiscussion(DiscussCreateDtoForAdmin dc)
        {
            try
            {
                _repo.CreateDiscussion(dc);
                return Ok(dc);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_discussion/{discuss_id}/{lesson_id}")]
        public IActionResult DeleteDiscussion(int discuss_id, int lesson_id)
        {
            try
            {
                _repo.DeleteDiscussion(discuss_id, lesson_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
