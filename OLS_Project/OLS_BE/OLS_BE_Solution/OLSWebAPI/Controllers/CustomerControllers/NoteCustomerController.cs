using BusinessObject.Dtos.NoteDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/note")]
    public class NoteCustomerController : ControllerBase
    {
        private readonly INoteRepository _repo;
        public NoteCustomerController(INoteRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_note_in_lesson_of_user/{lesson_id}/{user_id}")]
        public ActionResult<IEnumerable<NoteReadDtoForCustomer>> GetAllNoteInLessonOfUser(int lesson_id, int user_id)
        {
            try
            {
                var list = _repo.GetAllNoteByLessonIdAndUserId(lesson_id, user_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_note_detail/{note_id}")]
        public ActionResult<IEnumerable<NoteReadDtoForCustomer>> GetNoteDetail(int note_id)
        {
            try
            {
                var note = _repo.GetNoteByNoteId(note_id);
                return Ok(note);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_note")]
        public IActionResult CreateNote(NoteCreateDtoForCustomer note)
        {
            try
            {
                _repo.CreateNote(note);
                return Ok(note);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_note/{note_id}")]
        public IActionResult UpdateNote(int note_id, NoteUpdateDtoForCustomer note)
        {
            try
            {
                _repo.UpdateNote(note_id, note);
                var info = _repo.GetNoteByNoteId(note_id);
                return Ok(info);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_note/{note_id}")]
        public IActionResult DeleteNote(int note_id)
        {
            try
            {
                _repo.DeleteNote(note_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
