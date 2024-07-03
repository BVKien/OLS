using BusinessObject.Dtos.QuestionDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly QuestionDao _questionDao;
        public QuestionRepository() { }
        public QuestionRepository(QuestionDao questionDao)
        {
            _questionDao = questionDao;
        }

        // == customer ==
        public List<QuestionReadDtoForCustomer> GetAllQuestionByQuizIdForCustomer(int quizId)
            => _questionDao.GetAllQuestionByQuizIdForCustomer(quizId);
        public QuestionReadDtoForCustomer GetQuestionByQuestionIdAndQuizIdForCustomer(int questionId, int quizId)
            => _questionDao.GetQuestionByQuestionIdAndQuizIdForCustomer(questionId, quizId);

        // == admin ==
        public List<QuestionReadDtoForAdmin> GetAllQuestionByQuizIdForAdmin(int quizId)
            => _questionDao.GetAllQuestionByQuizIdForAdmin(quizId);
        public QuestionReadDtoForAdmin GetQuestionByQuestionIdAndQuizIdForAdmin(int questionId, int quizId)
            => _questionDao.GetQuestionByQuestionIdAndQuizIdForAdmin(questionId, quizId);
        public void CreateQuestion(QuestionCreateDtoForAdmin question)
            => _questionDao.CreateQuestion(question);
        public void UpdateQuestion(int questionId, int quizId, QuestionUpdateDtoForAdmin question)
            => _questionDao.UpdateQuestion(questionId, quizId, question);
        public void DeleteQuestion(int questionId, int quizId)
            => _questionDao.DeleteQuestion(questionId, quizId);
    }
}
