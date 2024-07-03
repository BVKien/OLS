using BusinessObject.Dtos.QuizDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/quiz")]
    public class QuizCustomerController : ControllerBase
    {
        private readonly IQuizRepository _repo;
        public QuizCustomerController(IQuizRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_quiz_in_lesson/{lesson_id}")]
        public ActionResult<IEnumerable<QuizReadDtoForCustomer>> GetAllQuizInLesson(int lesson_id)
        {
            try
            {
                var list = _repo.GetAllQuizByLessonIdForCustomer(lesson_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("get_quiz_detail_in_lesson/{quiz_id}/{lesson_id}")]
        public ActionResult<IEnumerable<QuizReadDtoForCustomer>> GetQuizDetailInLesson(int quiz_id, int lesson_id)
        {
            try
            {
                var quiz = _repo.GetQuizByQuizIdAndLessonIdForCustomer(quiz_id, lesson_id);
                if (quiz == null)
                {
                    return new ObjectResult("Quiz not found.") { StatusCode = 404 };
                }
                return Ok(quiz);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
