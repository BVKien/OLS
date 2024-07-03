using BusinessObject.Dtos.ChapterDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IChapterRepository
    {
        List<ChapterReadDtoForCustomer> GetAllChapterByCourseId(int courseId); 
    }
}
