using BusinessObject.Dtos.CourseDto;
using DataAccess.Dao;
using Repository.Services.Interfaces.ModelInterface;

namespace Repository.Services.Implements.ModelImplement
{
    public class CourseRepository : ICourseRepository
    {
        private readonly CourseDao _courseDao;
        public CourseRepository() { }
        public CourseRepository(CourseDao courseDao)
        {
            _courseDao = courseDao;
        }

        // == customer == 
        public List<CourseReadDtoForCustomer> GetAllCourseForCustomer()
            => _courseDao.GetAllCourseForCustomer();
        public CourseReadDtoForCustomer GetCourseByCourseIdForCustomer(int courseId)
            => _courseDao.GetCourseByCourseIdForCustomer(courseId);
        public List<CourseReadDtoForCustomer> GetAllCourseByLearningPathIdForCustomer(int learningPathId)
            => _courseDao.GetAllCourseByLearningPathIdForCustomer(learningPathId);

        // == admin ==
        public List<CourseReadDtoForAdmin> GetAllCourseForAdmin()
            => _courseDao.GetAllCourseForAdmin();
        public CourseReadDtoForAdmin GetCourseByCourseIdForAdmin(int courseId)
            => _courseDao.GetCourseByCourseIdForAdmin(courseId);
        public void CreateCourse(CourseCreateDtoForAdmin course)
            => _courseDao.CreateCourse(course);
        public void UpdateCourse(int courseId, CourseUpdateDtoForAdmin course)
            => _courseDao.UpdateCourse(courseId, course);
        public void DeleteCourse(int courseId)
            => _courseDao.DeleteCourse(courseId);
    }
}
