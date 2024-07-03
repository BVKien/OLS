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
        void CreateCourseEnrolled(CourseEnrolledCreateDtoForCustomer ceInfo);
    }
}
