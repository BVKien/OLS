using BusinessObject.Dtos.LessonDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface ILessonRepository
    {
        // == customer == 
        List<LessonReadDtoForCustomer> GetAllLessonByChapterId(int chapterId);

        // == admin == 
        List<LessonReadDtoForAdmin> GetAllLessonByChapterIdForAdmin(int chapterId);
        LessonReadDtoForAdmin GetLessonDetailByLessonIdForAdmin(int lessonId);
        void CreateLesson(LessonCreateDtoForAdmin lesson);
        void UpdateLesson(int lessonId, int chapterId, LessonUpdateDtoForAdmin lesson);
        void DeleteLesson(int lessonId, int chapterId);
    }
}
