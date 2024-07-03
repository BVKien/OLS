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
        List<LessonReadDtoForCustomer> GetAllLessonByChapterId(int chapterId);
    }
}
