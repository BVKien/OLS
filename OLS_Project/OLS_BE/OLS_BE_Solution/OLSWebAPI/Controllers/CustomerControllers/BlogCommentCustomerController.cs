using BusinessObject.Dtos.BlogCommentDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/comment")]
    public class BlogCommentCustomerController : ControllerBase
    {
        private readonly IBlogCommentRepository _repo;
        public BlogCommentCustomerController(IBlogCommentRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_comment/{blog_id}")]
        public ActionResult<IEnumerable<BlogCommentReadDtoForCustomer>> GetAllComment(int blog_id)
        {
            try
            {
                var list = _repo.GetAllCommentByBlogId(blog_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_comment_or_reply")]
        public IActionResult CreateCommentOrReply(BlogCommentCreateDtoForCustomer cr)
        {
            try
            {
                _repo.CreateCommentOrReply(cr);
                return Ok(cr);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_comment_or_reply/{blog_comment_id}/{blog_id}/{user_id}")]
        public IActionResult UpdateCommentOrReply(int blog_comment_id, int blog_id, int user_id, BlogCommentUpdateDtoForCustomer cr)
        {
            try
            {
                _repo.UpdateCommentOrReply(blog_comment_id, blog_id, user_id, cr);
                var response = new
                {
                    BlogCommentId = blog_comment_id,
                    BlogId = blog_id,
                    UserId = user_id,
                    CommentOrReplyInfo = cr
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_comment_or_reply/{blog_comment_id}/{blog_id}/{user_id}")]
        public IActionResult DeleteCommentOrReply(int blog_comment_id, int blog_id, int user_id)
        {
            try
            {
                _repo.DeleteCommentOrReply(blog_comment_id, blog_id, user_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
