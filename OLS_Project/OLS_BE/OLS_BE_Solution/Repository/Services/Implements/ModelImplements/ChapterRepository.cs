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

        // == customer == 
        public List<ChapterReadDtoForCustomer> GetAllChapterByCourseId(int courseId)
            => _chapterDao.GetAllChapterByCourseIdForCustomer(courseId);

        // == admin == 
        public List<ChapterReadDtoForAdmin> GetAllChapterByCourseIdForAdmin(int courseId)
            => _chapterDao.GetAllChapterByCourseIdForAdmin(courseId);
        public ChapterReadDtoForAdmin GetChapterDetailByChapterIdAndCourseId(int chapterId, int courseId)
            => _chapterDao.GetChapterDetailByChapterIdAndCourseId(chapterId, courseId);
        public void CreateChapter(ChapterCreateDtoForAdmin chapter)
            => _chapterDao.CreateChapter(chapter);
        public void UpdateChapter(int chapterId, int courseId, ChapterUpdateDtoForAdmin chapter)
            => _chapterDao.UpdateChapter(chapterId, courseId, chapter);
        public void DeleteChapter(int chapterId, int courseId)
            => _chapterDao.DeleteChapter(chapterId, courseId);
    }
}
