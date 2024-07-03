using BusinessObject.Dtos.CourseDto;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterface;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/course")]
    public class CourseAdminController : ControllerBase
    {
        private readonly ICourseRepository _repo;

        public CourseAdminController(ICourseRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_course")]
        public ActionResult<IEnumerable<CourseReadDtoForAdmin>> GetAllCourse()
        {
            try
            {
                var courseList = _repo.GetAllCourseForAdmin();
                return Ok(courseList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_course_detail/{course_id}")]
        public ActionResult<IEnumerable<CourseReadDtoForAdmin>> GetCourseDetail(int course_id)
        {
            try
            {
                var courseDetail = _repo.GetCourseByCourseIdForAdmin(course_id);
                return Ok(courseDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_course")]
        public IActionResult CreateNewCourse(CourseCreateDtoForAdmin course)
        {
            try
            {
                _repo.CreateCourse(course);
                return Ok(course);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_course/{course_id}")]
        public IActionResult UpdateCourse(int course_id, CourseUpdateDtoForAdmin course)
        {
            try
            {
                _repo.UpdateCourse(course_id, course);
                var courseDetail = _repo.GetCourseByCourseIdForAdmin(course_id);
                return Ok(courseDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_course/{course_id}")]
        public IActionResult DeleteCourse(int course_id)
        {
            try
            {
                _repo.DeleteCourse(course_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
