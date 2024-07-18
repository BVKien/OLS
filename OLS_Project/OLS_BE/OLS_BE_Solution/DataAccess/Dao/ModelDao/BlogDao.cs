using AutoMapper;
using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class BlogDao
    {
        private readonly IMapper _mapper;
        public BlogDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer == 
        // get all blog 
        public List<BlogReadDtoForCustomer> GetAllBlogForCustomer()
        {
            var listBlog = new List<BlogReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blogs = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .Include(b => b.BlogTagBlogTag)
                        .ToList();
                    listBlog = _mapper.Map<List<BlogReadDtoForCustomer>>(blogs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listBlog;
        }

        // get blog by blog id -> view blog detail 
        public BlogReadDtoForCustomer GetBlogByBlogIdForCustomer(int blogId)
        {
            var blogDetail = new BlogReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blog = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .FirstOrDefault(b => b.BlogId == blogId);
                    if (blog == null)
                    {
                        throw new Exception("Not found blog.");
                    }
                    blogDetail = _mapper.Map<BlogReadDtoForCustomer>(blog);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return blogDetail;
        }

        // get all blog by blog id and user id => view my blog list
        public List<BlogReadDtoForCustomer> GetAllBlogByUserIdForCustomer(int userId)
        {
            var listBlog = new List<BlogReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blogs = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .Where(b => b.UserUserId == userId)
                        .ToList();
                    listBlog = _mapper.Map<List<BlogReadDtoForCustomer>>(blogs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listBlog;
        }

        // get all blog by topic id
        public List<BlogReadDtoForCustomer> GetAllBlogByTopicIdForCustomer(int blogTopicId)
        {
            var listBlog = new List<BlogReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blogs = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .Where(b => b.BlogTopicBlogTopicId == blogTopicId)
                        .ToList();
                    listBlog = _mapper.Map<List<BlogReadDtoForCustomer>>(blogs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listBlog;
        }

        // create a new blog 
        public void CreateBlogForCustomer(BlogCreateDtoForCustomer blog)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newBlog = _mapper.Map<Blog>(blog);
                    context.Blogs.Add(newBlog);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a blog
        public void UpdateBlogForCustomer(int blogId, int userId, BlogUpdateDtoForCustomer blog)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // update 
                    _mapper.Map(blog, blogDetail);

                    context.Entry(blogDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a blog 
        public void DeleteBlogForCustomer(int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // rm 
                    context.Blogs.Remove(blogDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // == expert == 
        // get all blog 
        public List<BlogReadDtoForExpert> GetAllBlogForExpert()
        {
            var listBlog = new List<BlogReadDtoForExpert>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blogs = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .ToList();
                    listBlog = _mapper.Map<List<BlogReadDtoForExpert>>(blogs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listBlog;
        }

        // get blog by blog id -> view blog detail 
        public BlogReadDtoForExpert GetBlogByBlogIdForExpert(int blogId)
        {
            var blogDetail = new BlogReadDtoForExpert();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blog = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .FirstOrDefault(b => b.BlogId == blogId);
                    if (blog == null)
                    {
                        throw new Exception("Not found blog.");
                    }
                    blogDetail = _mapper.Map<BlogReadDtoForExpert>(blog);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return blogDetail;
        }

        // get all blog by blog id and user id => view my blog list
        public List<BlogReadDtoForExpert> GetAllBlogByUserIdForExpert(int userId)
        {
            var listBlog = new List<BlogReadDtoForExpert>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var blogs = context.Blogs
                        .Include(b => b.UserUser)
                        .Include(b => b.BlogTopicBlogTopic)
                        .Where(b => b.UserUserId == userId)
                        .ToList();
                    listBlog = _mapper.Map<List<BlogReadDtoForExpert>>(blogs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listBlog;
        }

        // create a new blog 
        public void CreateBlogForExpert(BlogCreateDtoForExpert blog)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newBlog = _mapper.Map<Blog>(blog);
                    context.Blogs.Add(newBlog);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a blog
        public void UpdateBlogForExpert(int blogId, int userId, BlogUpdateDtoForExpert blog)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // update 
                    _mapper.Map(blog, blogDetail);

                    context.Entry(blogDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a blog 
        public void DeleteBlogForExpert(int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // rm 
                    context.Blogs.Remove(blogDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // approve for customer blog = unbanned 
        public void ApproveBlog(int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // update status -> 1 -> approve  
                    var approveStatus = new BlogUpdateDtoForExpert
                    {
                        Status = 1
                    };
                    _mapper.Map(approveStatus, blogDetail);

                    context.Entry(blogDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // ban for customer blog
        public void BanBlog(int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var blogDetail = context.Blogs
                        .FirstOrDefault(b => b.BlogId == blogId
                        && b.UserUserId == userId);
                    if (blogDetail == null)
                    {
                        throw new Exception("Not found blog.");
                    }

                    // update status -> 1 -> approve  
                    var approveStatus = new BlogUpdateDtoForExpert
                    {
                        Status = 0
                    };
                    _mapper.Map(approveStatus, blogDetail);

                    context.Entry(blogDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
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
