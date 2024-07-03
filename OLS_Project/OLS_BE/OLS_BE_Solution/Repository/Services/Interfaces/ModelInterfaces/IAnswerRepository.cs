using BusinessObject.Dtos.AnswerDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IAnswerRepository
    {
        // == customer ==  
        List<AnswerReadDtoForCustomer> GetAllAnswerByQuestionIdForCustomer(int questionId);
        AnswerReadDtoForCustomer GetAnswerByAnswerIdAndQuestionIdForCustomer(int answerId, int questionId);
        bool ChooseAnswer(int answerId, int questionId);

        // == admin == 
        List<AnswerReadDtoForAdmin> GetAllAnswerByQuestionIdForAdmin(int questionId);
        AnswerReadDtoForAdmin GetAnswerByAnswerIdAndQuestionIdForAdmin(int answerId, int questionId);
        void CreateAnswer(AnswerCreateDtoForAdmin answer);
        void UpdateAnswer(int answerId, int questionId, AnswerUpdateDtoForAdmin answer);
        void DeleteAnswer(int answerId, int questionId);
    }
}
