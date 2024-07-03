using BusinessObject.Dtos.ChapterDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/chapter")]
    public class ChapterCustomerController : ControllerBase
    {
        private readonly IChapterRepository _repo;
        public ChapterCustomerController(IChapterRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_chapter_in_course/{course_id}")]
        public ActionResult<IEnumerable<ChapterReadDtoForCustomer>> GetAllChapterInCourse(int course_id)
        {
            try
            {
                var list = _repo.GetAllChapterByCourseId(course_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
