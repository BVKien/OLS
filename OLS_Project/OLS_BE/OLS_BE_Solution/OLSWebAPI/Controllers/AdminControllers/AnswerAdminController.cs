using BusinessObject.Dtos.AnswerDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/answer")]
    public class AnswerAdminController : ControllerBase
    {
        private readonly IAnswerRepository _repo;
        public AnswerAdminController(IAnswerRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_answer_of_question/{question_id}")]
        public ActionResult<IEnumerable<AnswerReadDtoForAdmin>> GetAllAnswerOfQuestion(int question_id)
        {
            try
            {
                var list = _repo.GetAllAnswerByQuestionIdForAdmin(question_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_answer_detail/{answer_id}/{question_id}")]
        public ActionResult<IEnumerable<AnswerReadDtoForAdmin>> GetAnswerDetail(int answer_id, int question_id)
        {
            try
            {
                var answer = _repo.GetAnswerByAnswerIdAndQuestionIdForAdmin(answer_id, question_id);
                return Ok(answer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_answer")]
        public IActionResult CreateAnswer(AnswerCreateDtoForAdmin answer)
        {
            try
            {
                _repo.CreateAnswer(answer);
                return Ok(answer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_answer/{answer_id}/{question_id}")]
        public IActionResult UpdateAnswer(int answer_id, int question_id, AnswerUpdateDtoForAdmin answer)
        {
            try
            {
                _repo.UpdateAnswer(answer_id, question_id, answer);
                var response = new
                {
                    AnswerId = answer_id,
                    QuestionId = question_id,
                    AnswerInfo = answer
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_answer/{answer_id}/{question_id}")]
        public IActionResult DeleteAnswer(int answer_id, int question_id)
        {
            try
            {
                _repo.DeleteAnswer(answer_id, question_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
