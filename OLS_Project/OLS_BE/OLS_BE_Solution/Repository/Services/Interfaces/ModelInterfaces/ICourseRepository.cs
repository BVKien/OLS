using BusinessObject.Dtos.CourseDto;

namespace Repository.Services.Interfaces.ModelInterface
{
    public interface ICourseRepository
    {
        // == customer == 
        List<CourseReadDtoForCustomer> GetAllCourseForCustomer();
        CourseReadDtoForCustomer GetCourseByCourseIdForCustomer(int courseId);
        List<CourseReadDtoForCustomer> GetAllCourseByLearningPathIdForCustomer(int learningPathId);

        // == admin == 
        List<CourseReadDtoForAdmin> GetAllCourseForAdmin();
        CourseReadDtoForAdmin GetCourseByCourseIdForAdmin(int courseId);
        void CreateCourse(CourseCreateDtoForAdmin course);
        void UpdateCourse(int courseId, CourseUpdateDtoForAdmin course);
        void DeleteCourse(int courseId);
    }
}
