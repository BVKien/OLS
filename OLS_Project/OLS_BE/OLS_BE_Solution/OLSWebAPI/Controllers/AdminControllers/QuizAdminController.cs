using BusinessObject.Dtos.QuizDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/quiz")]
    public class QuizAdminController : ControllerBase
    {
        private readonly IQuizRepository _repo;
        public QuizAdminController(IQuizRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_quiz_in_lesson/{lesson_id}")]
        public ActionResult<IEnumerable<QuizReadDtoForAdmin>> GetAllQuizInLesson(int lesson_id)
        {
            try
            {
                var list = _repo.GetAllQuizByLessonIdForAdmin(lesson_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("get_quiz_detail_in_lesson/{quiz_id}/{lesson_id}")]
        public ActionResult<IEnumerable<QuizReadDtoForAdmin>> GetQuizDetailInLesson(int quiz_id, int lesson_id)
        {
            try
            {
                var quiz = _repo.GetQuizByQuizIdAndLessonIdForAdmin(quiz_id, lesson_id);
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

        [HttpPost("create_quiz")]
        public IActionResult CreateQuiz(QuizCreateDtoForAdmin quiz)
        {
            try
            {
                _repo.CreateQuiz(quiz);
                return Ok(quiz);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut("update_quiz/{quiz_id}/{lesson_id}")]
        public IActionResult UpdateQuiz(int quiz_id, int lesson_id, QuizUpdateDtoForAdmin quiz)
        {
            try
            {
                var quizInfo = _repo.GetQuizByQuizIdAndLessonIdForAdmin(quiz_id, lesson_id);
                if (quizInfo == null)
                {
                    return new ObjectResult("Quiz not found.") { StatusCode = 404 };
                }

                _repo.UpdateQuiz(quiz_id, lesson_id, quiz);
                var response = new
                {
                    QuizId = quiz_id,
                    LessonId = lesson_id,
                    Quiz = quiz
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut("banned_quiz/{quiz_id}/{lesson_id}")]
        public IActionResult BannedQuiz(int quiz_id, int lesson_id)
        {
            try
            {
                var quizInfo = _repo.GetQuizByQuizIdAndLessonIdForAdmin(quiz_id, lesson_id);
                if (quizInfo == null)
                {
                    return new ObjectResult("Quiz not found.") { StatusCode = 404 };
                }

                _repo.BannedQuiz(quiz_id, lesson_id);
                return new ObjectResult("Quiz is banned successfully.") { StatusCode = 200 };
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut("unbanned_quiz/{quiz_id}/{lesson_id}")]
        public IActionResult UnBannedQuiz(int quiz_id, int lesson_id)
        {
            try
            {
                var quizInfo = _repo.GetQuizByQuizIdAndLessonIdForAdmin(quiz_id, lesson_id);
                if (quizInfo == null)
                {
                    return new ObjectResult("Quiz not found.") { StatusCode = 404 };
                }

                _repo.UnBannedQuiz(quiz_id, lesson_id);
                return new ObjectResult("Quiz is unbanned successfully.") { StatusCode = 200 };
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
