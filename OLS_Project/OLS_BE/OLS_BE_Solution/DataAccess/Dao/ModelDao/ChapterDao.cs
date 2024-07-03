using AutoMapper;
using BusinessObject.Dtos.ChapterDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Dao.ModelDao
{
    public class ChapterDao
    {
        private readonly IMapper _mapper;
        public ChapterDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all chapter by course id 
        public List<ChapterReadDtoForCustomer> GetAllChapterByCourseId(int courseId)
        {
            var listChByCid = new List<ChapterReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Chapters
                        .Where(c => c.CourseCourseId == courseId)
                        .Include(c => c.CourseCourse)
                        .ToList();
                    listChByCid = _mapper.Map<List<ChapterReadDtoForCustomer>>(list);
                    if (listChByCid.Count == 0)
                    {
                        throw new Exception("Chapter list is empty.");
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listChByCid;
        }
    }
}
