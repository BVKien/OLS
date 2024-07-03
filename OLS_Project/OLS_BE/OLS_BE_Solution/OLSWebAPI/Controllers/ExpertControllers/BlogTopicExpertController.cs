using BusinessObject.Dtos.BlogTopicDtos;
using BusinessObject.Models;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.ExpertControllers
{
    [ApiController]
    [Route("api/expert/blog_topic")]
    public class BlogTopicExpertController : ControllerBase
    {
        private readonly IBlogTopicRepository _repo;
        public BlogTopicExpertController(IBlogTopicRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_blog_topic")]
        public ActionResult<IEnumerable<BlogTopicReadDtoForExpert>> GetAllBlogTopic()
        {
            try
            {
                var list = _repo.GetAllBlogTopicForExpert();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_blog_topic_detail/{blog_topic_id}")]
        public ActionResult<IEnumerable<BlogTopicReadDtoForExpert>> GetBlogTopicDetail(int blog_topic_id)
        {
            try
            {
                var bt = _repo.GetBlogTopicByBlogTopicIdForExpert(blog_topic_id);
                return Ok(bt);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_blog_topic")]
        public IActionResult CreateBlogTopic(BlogTopicCreateDtoForExpert bt)
        {
            try
            {
                _repo.CreateBlogTopic(bt);
                return Ok(bt);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_blog_topic/{blog_topic_id}")]
        public IActionResult UpdateBlogTopic(int blog_topic_id, BlogTopicUpdateDtoForExpert bt)
        {
            try
            {
                _repo.UpdateBlogTopic(blog_topic_id, bt);
                var response = new
                {
                    BlogTopicId = blog_topic_id,
                    BlogTopicInfo = bt
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_blog_topic/{blog_topic_id}")]
        public IActionResult DeleteBlogTopic(int blog_topic_id)
        {
            try
            {
                _repo.DeleteBlogTopic(blog_topic_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
