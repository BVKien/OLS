using BusinessObject.Dtos.AnswerDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/answer")]
    public class AnswerCustomerController : ControllerBase
    {
        private readonly IAnswerRepository _repo;
        public AnswerCustomerController(IAnswerRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_answer_of_question/{question_id}")]
        public ActionResult<IEnumerable<AnswerReadDtoForCustomer>> GetAllAnswerOfQuestion(int question_id)
        {
            try
            {
                var list = _repo.GetAllAnswerByQuestionIdForCustomer(question_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_answer_detail/{answer_id}/{question_id}")]
        public ActionResult<IEnumerable<AnswerReadDtoForCustomer>> GetAnswerDetail(int answer_id, int question_id)
        {
            try
            {
                var answer = _repo.GetAnswerByAnswerIdAndQuestionIdForCustomer(answer_id, question_id);
                return Ok(answer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("choose_answer/{answer_id}/{question_id}")]
        public IActionResult ChooseAnswer(int answer_id, int question_id)
        {
            try
            {
                bool choose = _repo.ChooseAnswer(answer_id, question_id);
                return Ok(choose);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
