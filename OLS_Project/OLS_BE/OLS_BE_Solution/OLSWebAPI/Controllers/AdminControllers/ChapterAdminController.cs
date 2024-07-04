using BusinessObject.Dtos.ChapterDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/chapter")]
    public class ChapterAdminController : ControllerBase
    {
        private readonly IChapterRepository _repo;
        public ChapterAdminController(IChapterRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_chapter_in_course/{course_id}")]
        public ActionResult<IEnumerable<ChapterReadDtoForAdmin>> GetAllChapterInCourse(int courseId)
        {
            try
            {
                var list = _repo.GetAllChapterByCourseIdForAdmin(courseId);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_chapter_detail/{chapter_id}/{course_id}")]
        public ActionResult<IEnumerable<ChapterReadDtoForAdmin>> GetChapterDetail(int chapter_id, int course_id)
        {
            try
            {
                var chapter = _repo.GetChapterDetailByChapterIdAndCourseId(chapter_id, course_id);
                return Ok(chapter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_chapter")]
        public IActionResult CreateChapter(ChapterCreateDtoForAdmin chapter)
        {
            try
            {
                _repo.CreateChapter(chapter);
                return Ok(chapter);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_chapter/{chapter_id}/{course_id}")]
        public IActionResult UpdateChapter(int chapter_id, int course_id, ChapterUpdateDtoForAdmin chapter)
        {
            try
            {
                _repo.UpdateChapter(chapter_id, course_id, chapter);
                var response = new
                {
                    ChapterId = chapter_id,
                    CourseId = course_id,
                    ChapterInfo = chapter
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_chapter/{chapter_id}/{course_id}")]
        public IActionResult DeleteChapter(int chapter_id, int course_id)
        {
            try
            {
                _repo.DeleteChapter(chapter_id, course_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
