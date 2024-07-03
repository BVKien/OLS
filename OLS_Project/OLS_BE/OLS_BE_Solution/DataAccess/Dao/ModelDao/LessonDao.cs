using AutoMapper;
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

        // get all lesson by chapter id 
        public List<LessonReadDtoForCustomer> GetAllLessonByChapterId(int chapterId)
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
    }
}
