using BusinessObject.Dtos.LessonDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class LessonRepository : ILessonRepository
    {
        private readonly LessonDao _lessonDao;
        public LessonRepository() { }
        public LessonRepository(LessonDao lessonDao)
        {
            _lessonDao = lessonDao;
        }

        // == customer == 
        public List<LessonReadDtoForCustomer> GetAllLessonByChapterId(int chapterId)
            => _lessonDao.GetAllLessonByChapterIdForCustomer(chapterId);
        public LessonReadDtoForCustomer GetLessonDetailByLessonIdForCustomer(int lessonId)
            =>_lessonDao.GetLessonDetailByLessonIdForCustomer(lessonId);

        // == admin == 
        public List<LessonReadDtoForAdmin> GetAllLessonByChapterIdForAdmin(int chapterId)
            => _lessonDao.GetAllLessonByChapterIdForAdmin(chapterId);
        public LessonReadDtoForAdmin GetLessonDetailByLessonIdForAdmin(int lessonId)
            => _lessonDao.GetLessonDetailByLessonIdForAdmin(lessonId);
        public void CreateLesson(LessonCreateDtoForAdmin lesson)
            => _lessonDao.CreateLesson(lesson);
        public void UpdateLesson(int lessonId, int chapterId, LessonUpdateDtoForAdmin lesson)
            => _lessonDao.UpdateLesson(lessonId, chapterId, lesson);
        public void DeleteLesson(int lessonId, int chapterId)
            => _lessonDao.DeleteLesson(lessonId, chapterId);
    }
}
