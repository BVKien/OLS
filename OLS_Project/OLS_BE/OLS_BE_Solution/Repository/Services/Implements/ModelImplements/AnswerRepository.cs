using BusinessObject.Dtos.AnswerDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class AnswerRepository : IAnswerRepository
    {
        private readonly AnswerDao _answerDao;
        public AnswerRepository() { }
        public AnswerRepository(AnswerDao answerDao)
        {
            _answerDao = answerDao;
        }

        // == customer ==  
        public List<AnswerReadDtoForCustomer> GetAllAnswerByQuestionIdForCustomer(int questionId)
            => _answerDao.GetAllAnswerByQuestionIdForCustomer(questionId);
        public AnswerReadDtoForCustomer GetAnswerByAnswerIdAndQuestionIdForCustomer(int answerId, int questionId)
            => _answerDao.GetAnswerByAnswerIdAndQuestionIdForCustomer(answerId, questionId);
        public bool ChooseAnswer(int answerId, int questionId)
            => _answerDao.ChooseAnswer(answerId, questionId);

        // == admin == 
        public List<AnswerReadDtoForAdmin> GetAllAnswerByQuestionIdForAdmin(int questionId)
            => _answerDao.GetAllAnswerByQuestionIdForAdmin(questionId);
        public AnswerReadDtoForAdmin GetAnswerByAnswerIdAndQuestionIdForAdmin(int answerId, int questionId)
            => _answerDao.GetAnswerByAnswerIdAndQuestionIdForAdmin(answerId, questionId);
        public void CreateAnswer(AnswerCreateDtoForAdmin answer)
            => _answerDao.CreateAnswer(answer);
        public void UpdateAnswer(int answerId, int questionId, AnswerUpdateDtoForAdmin answer)
            => _answerDao.UpdateAnswer(answerId, questionId, answer);
        public void DeleteAnswer(int answerId, int questionId)
            => _answerDao.DeleteAnswer(answerId, questionId);
    }
}
