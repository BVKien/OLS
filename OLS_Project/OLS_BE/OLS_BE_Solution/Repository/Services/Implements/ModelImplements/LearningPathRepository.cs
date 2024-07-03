using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Dtos.LearningPathDtos;
using BusinessObject.Models;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterface;

namespace Repository.Services.Implements.ModelImplement
{
    public class LearningPathRepository : ILearningPathRepository
    {
        private readonly LearningPathDao _learningPathDao;
        public LearningPathRepository() { }
        public LearningPathRepository(LearningPathDao learningPathDao)
        {
            _learningPathDao = learningPathDao;
        }

        public List<LearningPathReadDtoForCustomer> GetAllLearningPathForCustomer()
            => _learningPathDao.GetAllLearningPathForCustomer();
        public LearningPathReadDtoForCustomer GetLearningPathByGetLearningPathIdForCustomer(int lpId)
            => _learningPathDao.GetLearningPathByGetLearningPathIdForCustomer(lpId);

        // == admin ==
        public List<LearningPathReadDtoForAdmin> GetAllLearningPathForAdmin()
            => _learningPathDao.GetAllLearningPathForAdmin();
        public LearningPathReadDtoForAdmin GetLearningPathByGetLearningPathIdForAdmin(int lpId)
            => _learningPathDao.GetLearningPathByGetLearningPathIdForAdmin(lpId);
        public void CreateLearningPath(LearningPathCreateDtoForAdmin lp)
            => _learningPathDao.CreateLearningPath(lp);
        public void UpdateLearningPath(int lpId, LearningPathUpdateDtoForAdmin lp)
            => _learningPathDao.UpdateLearningPath(lpId, lp);
        public void DeleteLearningPath(int lpId)
            => _learningPathDao.DeleteLearningPath(lpId);
    }
}
