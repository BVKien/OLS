using BusinessObject.Dtos.CourseEnrolledDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/course_enrolled")]
    public class CourseEnrolledCustomerController : ControllerBase
    {
        private readonly ICourseEnrolledRepository _repo;
        public CourseEnrolledCustomerController(ICourseEnrolledRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("check_course_register_by_user/{course_id}/{user_id}")]
        public IActionResult CheckCourseRegiterByUser(int course_id, int user_id)
        {
            try
            {
                var check = _repo.IsCourseRegisterByUser(course_id, user_id);
                return Ok(check);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("register_free_course")]
        public IActionResult RegisterFreeCourse(CourseEnrolledCreateDtoForCustomer ceInfo)
        {
            try
            {
                _repo.CreateCourseEnrolled(ceInfo);

                var response = new
                {
                    Status = 200,
                    Msg = "OK",
                    Detail = "Register free course successfully."
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_course_enrolled_of_user/{user_id}")]
        public ActionResult<IEnumerable<CourseEnrolledReadDtoForCustomer>> GetAll(int user_id)
        {
            try
            {
                var list = _repo.GetAllByUserIdForCustomer(user_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
