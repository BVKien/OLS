using BusinessObject.Dtos.FeedBackDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IFeedbackRepository
    {
        List<FeedBackReadDtoForCustomer> GetAllFeedBackByCourseId(int courseId);
        FeedBackReadDtoForCustomer GetFeedBackByFeedbackId(int feedbackId);
        void CreateFeedback(FeedBackCreateDtoForCustomer fb);
        void UpdateFeedback(int feedbackId, int courseId, int userId, FeedBackUpdateDtoForCustomer fb);
        void DeleteFeedback(int feedbackId, int courseId, int userId);
    }
}
