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

        // == customer == 
        // get all chapter by course id 
        public List<ChapterReadDtoForCustomer> GetAllChapterByCourseIdForCustomer(int courseId)
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

        // == admin == 
        // get all chapter by course id 
        public List<ChapterReadDtoForAdmin> GetAllChapterByCourseIdForAdmin(int courseId)
        {
            var cList = new List<ChapterReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Chapters
                        .Where(c => c.CourseCourseId == courseId)
                        .ToList();
                    cList = _mapper.Map<List<ChapterReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return cList;
        }

        // get chapter detail by chapter id
        public ChapterReadDtoForAdmin GetChapterDetailByChapterIdAndCourseId(int chapterId, int courseId)
        {
            var cDetail = new ChapterReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var chapter = context.Chapters
                        .FirstOrDefault(c => c.ChapterId == chapterId
                        && c.CourseCourseId == courseId);
                    if (chapter == null)
                    {
                        throw new Exception("Not found chapter.");
                    }
                    cDetail = _mapper.Map<ChapterReadDtoForAdmin>(chapter);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return cDetail;
        }

        // create a new chapter 
        public void CreateChapter(ChapterCreateDtoForAdmin chapter)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newChapter = _mapper.Map<Chapter>(chapter);
                    context.Chapters.Add(newChapter);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a chapter 
        public void UpdateChapter(int chapterId, int courseId, ChapterUpdateDtoForAdmin chapter)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var cDetail = context.Chapters
                        .FirstOrDefault(c => c.ChapterId == chapterId
                        && c.CourseCourseId == courseId);
                    if (cDetail == null)
                    {
                        throw new Exception("Not found chapter.");
                    }

                    // update 
                    _mapper.Map(chapter, cDetail);

                    context.Entry(cDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a chapter 
        public void DeleteChapter(int chapterId, int courseId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var cDetail = context.Chapters
                        .FirstOrDefault(c => c.ChapterId == chapterId
                        && c.CourseCourseId == courseId);
                    if (cDetail == null)
                    {
                        throw new Exception("Not found chapter.");
                    }

                    // rm 
                    context.Chapters.Remove(cDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
