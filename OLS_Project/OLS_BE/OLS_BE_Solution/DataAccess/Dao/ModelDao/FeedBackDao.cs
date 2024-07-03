using AutoMapper;
using BusinessObject.Dtos.FeedBackDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class FeedBackDao
    {
        private readonly IMapper _mapper;
        public FeedBackDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all feedback by course id 
        public List<FeedBackReadDtoForCustomer> GetAllFeedBackByCourseId(int courseId)
        {
            var listFb = new List<FeedBackReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.FeedBacks
                        .Where(fb => fb.CourseCourseId == courseId)
                        .Include(fb => fb.UserUser)
                        .Include(fb => fb.CourseCourse)
                        .ToList();
                    listFb = _mapper.Map<List<FeedBackReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listFb;
        }

        // get feedback by feedback id 
        public FeedBackReadDtoForCustomer GetFeedBackByFeedbackId(int feedbackId)
        {
            var fbDetail = new FeedBackReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var fb = context.FeedBacks
                        .Where(fb => fb.FeedbackId == feedbackId)
                        .Include(fb => fb.UserUser)
                        .Include(fb => fb.CourseCourse)
                        .ToList();
                    fbDetail = _mapper.Map<FeedBackReadDtoForCustomer>(fb);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return fbDetail;
        }

        // create a new feedback 
        public void CreateFeedback(FeedBackCreateDtoForCustomer fb)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newFb = _mapper.Map<FeedBack>(fb);
                    context.FeedBacks.Add(newFb);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a feedback 
        public void UpdateFeedback(int feedbackId, int courseId, int userId, FeedBackUpdateDtoForCustomer fb)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var fbDetail = context.FeedBacks
                        .FirstOrDefault(fb => fb.FeedbackId == feedbackId
                        && fb.CourseCourseId == courseId
                        && fb.UserUserId == userId);
                    if (fbDetail == null)
                    {
                        throw new Exception("Not found feedback.");
                    }

                    // update feedback
                    _mapper.Map(fb, fbDetail);

                    context.Entry(fbDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a feedback 
        public void DeleteFeedback(int feedbackId, int courseId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var fbDetail = context.FeedBacks
                        .FirstOrDefault(fb => fb.FeedbackId == feedbackId
                        && fb.CourseCourseId == courseId
                        && fb.UserUserId == userId);
                    if (fbDetail == null)
                    {
                        throw new Exception("Not found feedback.");
                    }

                    // rm
                    context.FeedBacks.Remove(fbDetail);
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
