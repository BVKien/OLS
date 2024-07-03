using BusinessObject.Dtos.SaveBlogDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/save_blog")]
    public class SaveBlogCustomerController : ControllerBase
    {
        private readonly ISaveBlogRepository _repo;
        public SaveBlogCustomerController(ISaveBlogRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_blog_saved/{user_id}")]
        public ActionResult<IEnumerable<SaveBlogReadDtoForCustomer>> GetAllSavedBlogOfUser(int user_id)
        {
            try
            {
                var list = _repo.GetAllSavedBlogByUserId(user_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("save_blog")]
        public IActionResult SaveBlog(SaveBlogCreateDtoForCustomer sb)
        {
            try
            {
                _repo.SaveBlog(sb);
                return Ok(sb);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("unsave_blog/{blog_id}/{user_id}")]
        public IActionResult UnSaveBlog(int blog_id, int user_id)
        {
            try
            {
                _repo.UnSaveBlog(blog_id, user_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
