using BusinessObject.Dtos.QuestionDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/question")]
    public class QuestionAdminController : ControllerBase
    {
        private readonly IQuestionRepository _repo;
        public QuestionAdminController(IQuestionRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_question_in_quiz/{quiz_id}")]
        public ActionResult<IEnumerable<QuestionReadDtoForAdmin>> GetAllQuestionInQuiz(int quiz_id)
        {
            try
            {
                var list = _repo.GetAllQuestionByQuizIdForAdmin(quiz_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_question_detail/{question_id}/{quiz_id}")]
        public ActionResult<IEnumerable<QuestionReadDtoForAdmin>> GetQuestionDetail(int question_id, int quiz_id)
        {
            try
            {
                var question = _repo.GetQuestionByQuestionIdAndQuizIdForAdmin(question_id, quiz_id);
                return Ok(question);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_question")]
        public IActionResult CreateQuestion(QuestionCreateDtoForAdmin question)
        {
            try
            {
                _repo.CreateQuestion(question);
                return Ok(question);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_question/{question_id}/{quiz_id}")]
        public IActionResult UpdateQuestion(int question_id, int quiz_id, QuestionUpdateDtoForAdmin question)
        {
            try
            {
                _repo.UpdateQuestion(question_id, quiz_id, question);
                var response = new
                {
                    QuestionId = question_id,
                    QuizId = quiz_id,
                    QuestionInfo = question
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_question/{question_id}/{quiz_id}")]
        public IActionResult DeleteQuestion(int question_id, int quiz_id)
        {
            try
            {
                _repo.DeleteQuestion(question_id, quiz_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
