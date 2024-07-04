using BusinessObject.Dtos.ChapterDtos;
using BusinessObject.Dtos.LessonDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/lesson")]
    public class LessonAdminController : ControllerBase
    {
        private readonly ILessonRepository _repo;
        public LessonAdminController(ILessonRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_lesson_in_chapter/{chapter_id}")]
        public ActionResult<IEnumerable<ChapterReadDtoForAdmin>> GetAllLessonInChapter(int chapter_id)
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
        public ActionResult<IEnumerable<ChapterReadDtoForAdmin>> GetLessonDetail(int lesson_id)
        {
            try
            {
                var lesson = _repo.GetLessonDetailByLessonIdForAdmin(lesson_id);
                return Ok(lesson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_lesson")]
        public IActionResult CreateLesson(LessonCreateDtoForAdmin lesson)
        {
            try
            {
                _repo.CreateLesson(lesson);
                return Ok(lesson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("upadte_lesson/{lesson_id}/{chapter_id}")]
        public IActionResult UpdateLesson(int lesson_id, int chapter_id, LessonUpdateDtoForAdmin lesson)
        {
            try
            {
                _repo.UpdateLesson(lesson_id, chapter_id, lesson);
                var response = new
                {
                    LessonId = lesson_id,
                    ChapterId = chapter_id,
                    LessonInfo = lesson
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_lesson/{lesson_id}/{chapter_id}")]
        public IActionResult DeleteLesson(int lesson_id, int chapter_id)
        {
            try
            {
                _repo.DeleteLesson(lesson_id, chapter_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
