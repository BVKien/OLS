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

        // check exist course enrolled | user 
        public bool IsExistedCourseByUser(int courseId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var ceInfo = context.CourseEnrolleds
                        .Where(ce => ce.CourseCourseId == courseId && ce.UserUserId == userId)
                        .FirstOrDefault();
                    if (ceInfo != null)
                    {
                        return false;
                    }

                    return true;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // register course -> create a new course enrolled
        public void CreateCourseEnrolled(CourseEnrolledCreateDtoForCustomer ceInfo)
        {
            try
            {
                // check exited
                bool checkExist = IsExistedCourseByUser(ceInfo.CourseCourseId, ceInfo.UserUserId);
                if (checkExist == false)
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
