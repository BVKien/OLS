using BusinessObject.Dtos.ChapterDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;

namespace Repository.Services.Implements.ModelImplements
{
    public class ChapterRepository : IChapterRepository
    {
        private readonly ChapterDao _chapterDao;
        public ChapterRepository() { }
        public ChapterRepository(ChapterDao chapterDao)
        {
            _chapterDao = chapterDao;
        }

        public List<ChapterReadDtoForCustomer> GetAllChapterByCourseId(int courseId)
            => _chapterDao.GetAllChapterByCourseId(courseId);
    }
}
