using BusinessObject.Dtos.BlogDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.ExpertControllers
{
    [ApiController]
    [Route("api/expert/blog")]
    public class BlogExpertController : ControllerBase
    {
        private readonly IBlogRepository _repo;
        public BlogExpertController(IBlogRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_blog")]
        public ActionResult<IEnumerable<BlogReadDtoForExpert>> GetAllBlog()
        {
            try
            {
                var listBlog = _repo.GetAllBlogForExpert();
                return Ok(listBlog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_blog_detail/{blog_id}")]
        public ActionResult<IEnumerable<BlogReadDtoForExpert>> GetBlogDetail(int blog_id)
        {
            try
            {
                var blog = _repo.GetBlogByBlogIdForExpert(blog_id);
                return Ok(blog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_user_blog_list/{user_id}")]
        public ActionResult<IEnumerable<BlogReadDtoForExpert>> GetMyBlogList(int user_id)
        {
            try
            {
                var list = _repo.GetAllBlogByUserIdForExpert(user_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_blog")]
        public IActionResult CreateBlog(BlogCreateDtoForExpert blog)
        {
            try
            {
                _repo.CreateBlogForExpert(blog);
                return Ok(blog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_blog/{blog_id}/{user_id}")]
        public IActionResult UpdateBlog(int blog_id, int user_id, BlogUpdateDtoForExpert blog)
        {
            try
            {
                _repo.UpdateBlogForExpert(blog_id, user_id, blog);
                var response = new
                {
                    BlogId = blog_id,
                    UserId = user_id,
                    BlogInfo = blog
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_blog/{blog_id}/{user_id}")]
        public IActionResult DeleteBlog(int blog_id, int user_id)
        {
            try
            {
                _repo.DeleteBlogForExpert(blog_id, user_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("approve_blog/{blog_id}/{user_id}")]
        public IActionResult ApproveBlog(int blog_id, int user_id)
        {
            try
            {
                _repo.ApproveBlog(blog_id, user_id);
                var response = new
                {
                    StatusCode = 200,
                    Msg = "Approve blog successfully"
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("banned_blog/{blog_id}/{user_id}")]
        public IActionResult BannedBlog(int blog_id, int user_id)
        {
            try
            {
                _repo.BanBlog(blog_id, user_id);
                var response = new
                {
                    StatusCode = 200,
                    Msg = "Banned blog successfully"
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
