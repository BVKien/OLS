using AutoMapper;
using BusinessObject.Dtos.BlogCommentDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class BlogCommentDao
    {
        private readonly IMapper _mapper;
        public BlogCommentDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all comment in blog discussion 
        public List<BlogCommentReadDtoForCustomer> GetAllCommentByBlogId(int blogId)
        {
            var commentList = new List<BlogCommentReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.BlogComments
                        .Include(c => c.UserUser)
                        .Include(c => c.BlogBlog)
                        .Where(c => c.BlogBlogId == blogId)
                        .ToList();
                    commentList = _mapper.Map<List<BlogCommentReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return commentList;
        }

        // create a new comment
        // if field ReplyForCommentId == null ? ask : reply(must be correct blog comment id)
        // cr meaning comment reply 
        public void CreateCommentOrReply(BlogCommentCreateDtoForCustomer cr)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newCrInfo = _mapper.Map<BlogComment>(cr);
                    context.BlogComments.Add(newCrInfo);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a comment or reply 
        // by blog comment id and blog id and user id 
        // cr meaning comment reply 
        public void UpdateCommentOrReply(int blogCommentId, int blogId, int userId, BlogCommentUpdateDtoForCustomer cr)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var crDetail = context.BlogComments
                        .FirstOrDefault(cr => cr.BlogCommentId == blogCommentId
                        && cr.BlogBlogId == blogId
                        && cr.UserUserId == userId);
                    if (crDetail == null)
                    {
                        throw new Exception("Not found comment.");
                    }

                    // update 
                    _mapper.Map(cr, crDetail);

                    context.Entry(crDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a comment or reply
        public void DeleteCommentOrReply(int blogCommentId, int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var crDetail = context.BlogComments
                        .FirstOrDefault(cr => cr.BlogCommentId == blogCommentId
                        && cr.BlogBlogId == blogId
                        && cr.UserUserId == userId);
                    if (crDetail == null)
                    {
                        throw new Exception("Not found comment.");
                    }

                    // rm 
                    context.BlogComments.Remove(crDetail);
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
