using BusinessObject.Dtos.QuizDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IQuizRepository
    {
        // == customer == 
        List<QuizReadDtoForCustomer> GetAllQuizByLessonIdForCustomer(int lessonId);
        QuizReadDtoForCustomer GetQuizByQuizIdAndLessonIdForCustomer(int quizId, int lessonId);

        // == admin ==
        List<QuizReadDtoForAdmin> GetAllQuizByLessonIdForAdmin(int lessonId);
        QuizReadDtoForAdmin GetQuizByQuizIdAndLessonIdForAdmin(int quizId, int lessonId);
        void CreateQuiz(QuizCreateDtoForAdmin quiz);
        void UpdateQuiz(int quizId, int lessonId, QuizUpdateDtoForAdmin quiz);
        void BannedQuiz(int quizId, int lessonId);
        void UnBannedQuiz(int quizId, int lessonId); 
    }
}
