using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Dtos.LearningPathDtos;
using BusinessObject.Models;

namespace Repository.Services.Interfaces.ModelInterface
{
    public interface ILearningPathRepository
    {
        // == customer ==
        List<LearningPathReadDtoForCustomer> GetAllLearningPathForCustomer();
        LearningPathReadDtoForCustomer GetLearningPathByGetLearningPathIdForCustomer(int lpId);

        // == admin == 
        List<LearningPathReadDtoForAdmin> GetAllLearningPathForAdmin();
        LearningPathReadDtoForAdmin GetLearningPathByGetLearningPathIdForAdmin(int lpId);
        void CreateLearningPath(LearningPathCreateDtoForAdmin lp);
        void UpdateLearningPath(int lpId, LearningPathUpdateDtoForAdmin lp);
        void DeleteLearningPath(int lpId);
    }
}
