using BusinessObject.Dtos.QuizDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;

namespace Repository.Services.Implements.ModelImplements
{
    public class QuizRepository : IQuizRepository
    {
        private readonly QuizDao _quizDao;
        public QuizRepository() { }
        public QuizRepository(QuizDao quizDao)
        {
            _quizDao = quizDao;
        }

        // == customer == 
        public List<QuizReadDtoForCustomer> GetAllQuizByLessonIdForCustomer(int lessonId)
            => _quizDao.GetAllQuizByLessonIdForCustomer(lessonId);
        public QuizReadDtoForCustomer GetQuizByQuizIdAndLessonIdForCustomer(int quizId, int lessonId)
            => _quizDao.GetQuizByQuizIdAndLessonIdForCustomer(quizId, lessonId);

        // == admin ==
        public List<QuizReadDtoForAdmin> GetAllQuizByLessonIdForAdmin(int lessonId)
            => _quizDao.GetAllQuizByLessonIdForAdmin(lessonId);
        public QuizReadDtoForAdmin GetQuizByQuizIdAndLessonIdForAdmin(int quizId, int lessonId)
            => _quizDao.GetQuizByQuizIdAndLessonIdForAdmin(quizId, lessonId);
        public void CreateQuiz(QuizCreateDtoForAdmin quiz)
            => _quizDao.CreateQuiz(quiz);
        public void UpdateQuiz(int quizId, int lessonId, QuizUpdateDtoForAdmin quiz)
            => _quizDao.UpdateQuiz(quizId, lessonId, quiz);
        public void BannedQuiz(int quizId, int lessonId)
            => _quizDao.BannedQuiz(quizId, lessonId);
        public void UnBannedQuiz(int quizId, int lessonId)
            => _quizDao.UnBannedQuiz(quizId, lessonId);
    }
}
