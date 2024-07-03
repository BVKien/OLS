using BusinessObject.Dtos.FeedBackDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/feed_back")]
    public class FeedbackCustomerController : ControllerBase
    {
        private readonly IFeedbackRepository _repo;
        public FeedbackCustomerController(IFeedbackRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_feed_back_in_course/{course_id}")]
        public ActionResult<IEnumerable<FeedBackReadDtoForCustomer>> GetAllFeedBackInCourse(int course_id)
        {
            try
            {
                var list = _repo.GetAllFeedBackByCourseId(course_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_feed_back")]
        public IActionResult CreateFeedback(FeedBackCreateDtoForCustomer fb)
        {
            try
            {
                _repo.CreateFeedback(fb);
                return Ok(fb);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_feed_back/{feed_back_id}/{course_id}/{user_id}")]
        public IActionResult UpdateFeedback(int feed_back_id, int course_id, int user_id, FeedBackUpdateDtoForCustomer fb)
        {
            try
            {
                _repo.UpdateFeedback(feed_back_id, course_id, user_id, fb);
                var response = new FeedBackUpdateDtoReponseForCustomer
                {
                    FeedbackId = feed_back_id,
                    FeedbackContent = fb.FeedbackContent,
                    RateStar = fb.RateStar,
                    UserUserId = user_id,
                    CourseCourseId = course_id,
                    UpdatedAt = fb.UpdatedAt,
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_feed_back/{feed_back_id}/{course_id}/{user_id}")]
        public IActionResult DeleteFeedback(int feed_back_id, int course_id, int user_id)
        {
            try
            {
                _repo.DeleteFeedback(feed_back_id, course_id, user_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
