using BusinessObject.Dtos.QuestionDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/question")]
    public class QuestionCustomerController : ControllerBase
    {
        private readonly IQuestionRepository _repo;
        public QuestionCustomerController(IQuestionRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_question_in_quiz/{quiz_id}")]
        public ActionResult<IEnumerable<QuestionReadDtoForCustomer>> GetAllQuestionInQuiz(int quiz_id)
        {
            try
            {
                var list = _repo.GetAllQuestionByQuizIdForCustomer(quiz_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_question_detail/{question_id}/{quiz_id}")]
        public ActionResult<IEnumerable<QuestionReadDtoForCustomer>> GetQuestionDetail(int question_id, int quiz_id)
        {
            try
            {
                var question = _repo.GetQuestionByQuestionIdAndQuizIdForCustomer(question_id, quiz_id);
                return Ok(question);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
