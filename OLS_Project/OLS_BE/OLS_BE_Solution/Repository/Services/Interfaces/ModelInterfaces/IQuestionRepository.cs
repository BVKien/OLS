using BusinessObject.Dtos.QuestionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IQuestionRepository
    {
        // == customer ==
        List<QuestionReadDtoForCustomer> GetAllQuestionByQuizIdForCustomer(int quizId);
        QuestionReadDtoForCustomer GetQuestionByQuestionIdAndQuizIdForCustomer(int questionId, int quizId);

        // == admin ==
        List<QuestionReadDtoForAdmin> GetAllQuestionByQuizIdForAdmin(int quizId);
        QuestionReadDtoForAdmin GetQuestionByQuestionIdAndQuizIdForAdmin(int questionId, int quizId);
        void CreateQuestion(QuestionCreateDtoForAdmin question);
        void UpdateQuestion(int questionId, int quizId, QuestionUpdateDtoForAdmin question);
        void DeleteQuestion(int questionId, int quizId);
    }
}
