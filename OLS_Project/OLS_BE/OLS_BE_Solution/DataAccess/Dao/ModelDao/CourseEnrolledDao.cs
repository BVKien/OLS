using AutoMapper;
using BusinessObject.Dtos.CourseEnrolledDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class CourseEnrolledDao
    {
        private readonly IMapper _mapper;
        public CourseEnrolledDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // check is register? 
        public bool IsCourseRegisterByUser(int courseId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var check = context.CourseEnrolleds
                        .FirstOrDefault(c => c.CourseCourseId == courseId
                        && c.UserUserId == userId);
                    if (check != null)
                    {
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return false;
        }

        // register course -> create a new course enrolled
        public void CreateCourseEnrolled(CourseEnrolledCreateDtoForCustomer ceInfo)
        {
            try
            {
                // check exited
                bool checkExist = IsCourseRegisterByUser(ceInfo.CourseCourseId, ceInfo.UserUserId);
                if (checkExist == true)
                {
                    throw new Exception("Course already registed.");
                }

                using (var context = new OLS_PRN231_V1Context())
                {
                    var registerCourse = _mapper.Map<CourseEnrolled>(ceInfo);
                    context.CourseEnrolleds.Add(registerCourse);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
