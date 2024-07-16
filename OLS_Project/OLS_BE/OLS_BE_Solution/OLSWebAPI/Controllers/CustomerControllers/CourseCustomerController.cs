using BusinessObject.Dtos.CourseDto;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterface;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/course")]
    public class CourseCustomerController : ControllerBase
    {
        private readonly ICourseRepository _repo;

        public CourseCustomerController(ICourseRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_free_course")]
        public ActionResult<IEnumerable<CourseReadDtoForCustomer>> GetAllFreeCourse()
        {
            try
            {
                var courseList = _repo.GetAllCourseForCustomer();
                return Ok(courseList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_course_detail/{course_id}")]
        public ActionResult<IEnumerable<CourseReadDtoForCustomer>> GetCourseDetail(int course_id)
        {
            try
            {
                var courseDetail = _repo.GetCourseByCourseIdForCustomer(course_id);
                return Ok(courseDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_all_course_in_learning_path/{learning_path_id}")]
        public ActionResult<IEnumerable<CourseReadDtoForCustomer>> GetAllCourseInLearningPath(int learning_path_id)
        {
            try
            {
                var list = _repo.GetAllCourseByLearningPathIdForCustomer(learning_path_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
