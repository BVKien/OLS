using BusinessObject.Dtos.CourseEnrolledDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface ICourseEnrolledRepository
    {
        bool IsCourseRegisterByUser(int courseId, int userId);
        void CreateCourseEnrolled(CourseEnrolledCreateDtoForCustomer ceInfo);
        List<CourseEnrolledReadDtoForCustomer> GetAllByUserIdForCustomer(int userId);
    }
}
