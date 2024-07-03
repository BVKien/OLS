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

        public List<LessonReadDtoForCustomer> GetAllLessonByChapterId(int chapterId)
            => _lessonDao.GetAllLessonByChapterId(chapterId);
    }
}
