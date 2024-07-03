using AutoMapper;
using BusinessObject.Dtos.DiscussDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class DiscussDao
    {
        private readonly IMapper _mapper;
        public DiscussDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get discussion by lesson id 
        public DiscussReadDtoForCustomer GetDiscussionDetail(int discussId, int lessonId)
        {
            DiscussReadDtoForCustomer dcDetail = new DiscussReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var dc = context.Discusses
                        .Include(d => d.LessonLesson)
                        .FirstOrDefault(d => d.DiscussId == discussId && d.LessonLessonId == lessonId);
                    dcDetail = _mapper.Map<DiscussReadDtoForCustomer>(dc);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return dcDetail;
        }

        // create a new discussion 
        public void CreateDiscussion(DiscussCreateDtoForAdmin dc)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newDc = _mapper.Map<Discuss>(dc);
                    context.Discusses.Add(newDc);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a discussion 
        public void DeleteDiscussion(int discussId, int lessonId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var dcDetail = context.Discusses
                        .FirstOrDefault(d => d.DiscussId == discussId && d.LessonLessonId == lessonId);
                    if (dcDetail == null)
                    {
                        throw new Exception("Not found discussion.");
                    }

                    // rm
                    context.Discusses.Remove(dcDetail);
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
