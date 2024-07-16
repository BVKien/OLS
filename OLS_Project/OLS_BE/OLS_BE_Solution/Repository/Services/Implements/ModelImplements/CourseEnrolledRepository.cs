using BusinessObject.Dtos.CourseEnrolledDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class CourseEnrolledRepository : ICourseEnrolledRepository
    {
        private readonly CourseEnrolledDao _courseEnrolledDao;
        public CourseEnrolledRepository() { }
        public CourseEnrolledRepository(CourseEnrolledDao courseEnrolledDao)
        {
            _courseEnrolledDao = courseEnrolledDao;
        }

        public bool IsCourseRegisterByUser(int courseId, int userId)
            => _courseEnrolledDao.IsCourseRegisterByUser(courseId, userId);
        public void CreateCourseEnrolled(CourseEnrolledCreateDtoForCustomer ceInfo)
            => _courseEnrolledDao.CreateCourseEnrolled(ceInfo);
    }
}
