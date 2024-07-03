using BusinessObject.Dtos.BlogTopicDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/blog_topic")]
    public class BlogTopicCustomerController : ControllerBase
    {
        private readonly IBlogTopicRepository _repo;
        public BlogTopicCustomerController(IBlogTopicRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_blog_topic")]
        public ActionResult<IEnumerable<BlogTopicReadDtoForCustomer>> GetAllBlogTopic()
        {
            try
            {
                var list = _repo.GetAllBlogTopicForCustomer();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
