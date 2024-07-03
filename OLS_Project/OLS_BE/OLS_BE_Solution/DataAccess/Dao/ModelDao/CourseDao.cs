using AutoMapper;
using BusinessObject.Dtos.CourseDto;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Dao
{
    public class CourseDao
    {
        private readonly IMapper _mapper;
        public CourseDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer ==
        // get all courses
        public List<CourseReadDtoForCustomer> GetAllCourseForCustomer()
        {
            var listCourses = new List<CourseReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var courses = context.Courses
                        .Include(c => c.LearningPathLearningPath)
                        .ToList();
                    listCourses = _mapper.Map<List<CourseReadDtoForCustomer>>(courses);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listCourses;
        }

        // get course by id 
        public CourseReadDtoForCustomer GetCourseByCourseIdForCustomer(int courseId)
        {
            CourseReadDtoForCustomer courseDetail = new CourseReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var course = context.Courses
                        .Include(c => c.LearningPathLearningPath)
                        .SingleOrDefault(c => c.CourseId == courseId);
                    courseDetail = _mapper.Map<CourseReadDtoForCustomer>(course);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return courseDetail;
        }

        // == admin == 
        // get all courses
        public List<CourseReadDtoForAdmin> GetAllCourseForAdmin()
        {
            var listCourses = new List<CourseReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var courses = context.Courses
                        .Include(c => c.LearningPathLearningPath)
                        .ToList();
                    listCourses = _mapper.Map<List<CourseReadDtoForAdmin>>(courses);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listCourses;
        }

        // get course by id 
        public CourseReadDtoForAdmin GetCourseByCourseIdForAdmin(int courseId)
        {
            CourseReadDtoForAdmin courseDetail = new CourseReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var course = context.Courses
                        .Include(c => c.LearningPathLearningPath)
                        .SingleOrDefault(c => c.CourseId == courseId);
                    courseDetail = _mapper.Map<CourseReadDtoForAdmin>(course);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return courseDetail;
        }

        // create a new course 
        public void CreateCourse(CourseCreateDtoForAdmin course)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newCourse = _mapper.Map<Course>(course);
                    context.Courses.Add(newCourse);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a course 
        public void UpdateCourse(int courseId, CourseUpdateDtoForAdmin course)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find
                    var courseDetail = context.Courses.FirstOrDefault(c => c.CourseId == courseId);
                    if (courseDetail == null)
                    {
                        throw new Exception("Not found course.");
                    }

                    // update course
                    _mapper.Map(course, courseDetail);

                    context.Entry(courseDetail).State = 
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a course 
        public void DeleteCourse(int courseId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var courseD = context.Courses
                        .SingleOrDefault(c => c.CourseId == courseId);

                    // rm 
                    context.Courses.Remove(courseD);
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
