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
    }
}
