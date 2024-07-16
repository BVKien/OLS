using BusinessObject.Dtos.ChapterDtos;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IChapterRepository
    {
        // == customer == 
        List<ChapterReadDtoForCustomer> GetAllChapterByCourseId(int courseId);
        
        // == admin == 
        List<ChapterReadDtoForAdmin> GetAllChapterByCourseIdForAdmin(int courseId);
        ChapterReadDtoForAdmin GetChapterDetailByChapterIdAndCourseId(int chapterId, int courseId);
        void CreateChapter(ChapterCreateDtoForAdmin chapter);
        void UpdateChapter(int chapterId, int courseId, ChapterUpdateDtoForAdmin chapter);
        void DeleteChapter(int chapterId, int courseId);
    }
}
