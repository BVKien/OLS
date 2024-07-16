using BusinessObject.Dtos.LessonDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/lesson")]
    public class LessonCustomerController : ControllerBase
    {
        private readonly ILessonRepository _repo;
        public LessonCustomerController(ILessonRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_lesson_in_chapter/{chapter_id}")]
        public ActionResult<IEnumerable<LessonReadDtoForCustomer>> GetAllLessonInChapter(int chapter_id)
        {
            try
            {
                var list = _repo.GetAllLessonByChapterId(chapter_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_lesson_detail/{lesson_id}")]
        public ActionResult<IEnumerable<LessonReadDtoForCustomer>> GetLessonDetail(int lesson_id)
        {
            try
            {
                var lesson = _repo.GetLessonDetailByLessonIdForCustomer(lesson_id);
                return Ok(lesson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
