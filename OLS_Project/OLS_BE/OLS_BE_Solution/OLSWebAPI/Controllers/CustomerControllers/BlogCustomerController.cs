using BusinessObject.Dtos.BlogDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/blog")]
    public class BlogCustomerController : ControllerBase
    {
        private readonly IBlogRepository _repo;
        public BlogCustomerController(IBlogRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_blog")]
        public ActionResult<IEnumerable<BlogReadDtoForCustomer>> GetAllBlog()
        {
            try
            {
                var listBlog = _repo.GetAllBlogForCustomer();
                return Ok(listBlog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_blog_detail/{blog_id}")]
        public ActionResult<IEnumerable<BlogReadDtoForCustomer>> GetBlogDetail(int blog_id)
        {
            try
            {
                var blog = _repo.GetBlogByBlogIdForCustomer(blog_id);
                return Ok(blog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_my_blog_list/{user_id}")]
        public ActionResult<IEnumerable<BlogReadDtoForCustomer>> GetMyBlogList(int user_id)
        {
            try
            {
                var list = _repo.GetAllBlogByUserIdForCustomer(user_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_all_blog_by_topic/{blog_topic_id}")]
        public ActionResult<IEnumerable<BlogReadDtoForCustomer>> GetAllBlogByTopic(int blog_topic_id)
        {
            try
            {
                var list = _repo.GetAllBlogByTopicIdForCustomer(blog_topic_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_draft_blog")]
        public IActionResult CreateBlog(BlogCreateDtoForCustomer blog)
        {
            try
            {
                _repo.CreateBlogForCustomer(blog);
                return Ok(blog);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_draft_blog/{blog_id}/{user_id}")]
        public IActionResult UpdateBlog(int blog_id, int user_id, BlogUpdateDtoForCustomer blog)
        {
            try
            {
                _repo.UpdateBlogForCustomer(blog_id, user_id, blog);
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

        [HttpDelete("delete_draft_blog/{blog_id}/{user_id}")]
        public IActionResult DeleteBlog(int blog_id, int user_id)
        {
            try
            {
                _repo.DeleteBlogForCustomer(blog_id, user_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
