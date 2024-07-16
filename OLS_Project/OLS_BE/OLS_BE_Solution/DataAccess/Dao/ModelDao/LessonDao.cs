using AutoMapper;
using BusinessObject.Dtos.ChapterDtos;
using BusinessObject.Dtos.LessonDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Dao.ModelDao
{
    public class LessonDao
    {
        private readonly IMapper _mapper;
        public LessonDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer == 
        // get all lesson by chapter id 
        public List<LessonReadDtoForCustomer> GetAllLessonByChapterIdForCustomer(int chapterId)
        {
            var listLesson = new List<LessonReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Lessons
                        .Where(l => l.ChapterChapterId == chapterId)
                        .Include(l => l.ChapterChapter)
                        .ToList();
                    listLesson = _mapper.Map<List<LessonReadDtoForCustomer>>(list);
                    if (listLesson.Count == 0)
                    {
                        throw new Exception("Lesson list is empty.");
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listLesson;
        }

        // get lesson detail by lesson id
        public LessonReadDtoForCustomer GetLessonDetailByLessonIdForCustomer(int lessonId)
        {
            var lessonDetail = new LessonReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var lesson = context.Lessons
                        .Include(l => l.ChapterChapter)
                        .FirstOrDefault(l => l.LessonId == lessonId);
                    if (lesson == null)
                    {
                        throw new Exception("Not found lesson.");
                    }
                    lessonDetail = _mapper.Map<LessonReadDtoForCustomer>(lesson);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return lessonDetail;
        }

        // == admin == 
        // get all lesson by chapter id 
        public List<LessonReadDtoForAdmin> GetAllLessonByChapterIdForAdmin(int chapterId)
        {
            var listLesson = new List<LessonReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Lessons
                        .Where(l => l.ChapterChapterId == chapterId)
                        .Include(l => l.ChapterChapter)
                        .ToList();
                    listLesson = _mapper.Map<List<LessonReadDtoForAdmin>>(list);
                    if (listLesson.Count == 0)
                    {
                        throw new Exception("Lesson list is empty.");
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listLesson;
        }

        // get lesson detail by lesson id
        public LessonReadDtoForAdmin GetLessonDetailByLessonIdForAdmin(int lessonId)
        {
            var lessonDetail = new LessonReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var lesson = context.Lessons
                        .Include(l => l.ChapterChapter)
                        .FirstOrDefault(l => l.LessonId == lessonId);
                    if (lesson == null)
                    {
                        throw new Exception("Not found lesson.");
                    }
                    lessonDetail = _mapper.Map<LessonReadDtoForAdmin>(lesson);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return lessonDetail;
        }

        // create a new lesson  
        public void CreateLesson(LessonCreateDtoForAdmin lesson)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newLesson = _mapper.Map<Lesson>(lesson);
                    context.Lessons.Add(newLesson);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a lesson  
        public void UpdateLesson(int lessonId, int chapterId, LessonUpdateDtoForAdmin lesson)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var lessonDetail = context.Lessons
                        .FirstOrDefault(l => l.LessonId == lessonId
                        && l.ChapterChapterId == chapterId);
                    if (lessonDetail == null)
                    {
                        throw new Exception("Not found lesson.");
                    }

                    // update 
                    _mapper.Map(lesson, lessonDetail);

                    context.Entry(lessonDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a lesson  
        public void DeleteLesson(int lessonId, int chapterId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var lessonDetail = context.Lessons
                        .FirstOrDefault(l => l.LessonId == lessonId
                        && l.ChapterChapterId == chapterId);
                    if (lessonDetail == null)
                    {
                        throw new Exception("Not found lesson.");
                    }

                    // rm 
                    context.Lessons.Remove(lessonDetail);
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
