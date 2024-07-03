using BusinessObject.Dtos.FeedBackDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;

namespace Repository.Services.Implements.ModelImplements
{
    public class FeedbackRepository : IFeedbackRepository
    {
        private readonly FeedBackDao _feedBackDao;
        public FeedbackRepository() { }
        public FeedbackRepository(FeedBackDao feedBackDao)
        {
            _feedBackDao = feedBackDao;
        }

        public List<FeedBackReadDtoForCustomer> GetAllFeedBackByCourseId(int courseId)
            => _feedBackDao.GetAllFeedBackByCourseId(courseId);
        public FeedBackReadDtoForCustomer GetFeedBackByFeedbackId(int feedbackId)
            => _feedBackDao.GetFeedBackByFeedbackId(feedbackId);
        public void CreateFeedback(FeedBackCreateDtoForCustomer fb)
            => _feedBackDao.CreateFeedback(fb);
        public void UpdateFeedback(int feedbackId, int courseId, int userId, FeedBackUpdateDtoForCustomer fb)
            => _feedBackDao.UpdateFeedback(feedbackId, courseId, userId, fb);
        public void DeleteFeedback(int feedbackId, int courseId, int userId)
            => _feedBackDao.DeleteFeedback(feedbackId, courseId, userId);
    }
}
