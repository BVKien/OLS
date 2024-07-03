using AutoMapper;
using BusinessObject.Dtos.SaveBlogDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class SaveBlogDao
    {
        private readonly IMapper _mapper;
        public SaveBlogDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all blog saved of user 
        public List<SaveBlogReadDtoForCustomer> GetAllSavedBlogByUserId(int userId)
        {
            var sbList = new List<SaveBlogReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.SaveBlogs
                        .Include(sb => sb.BlogBlog)
                        .Include(sb => sb.UserUser)
                        .Where(sb => sb.UserUserId == userId)
                        .ToList();
                    sbList = _mapper.Map<List<SaveBlogReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return sbList;
        }

        // create saved
        public void SaveBlog(SaveBlogCreateDtoForCustomer sb)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newSb = _mapper.Map<SaveBlog>(sb);
                    context.SaveBlogs.Add(newSb);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // unsaved 
        public void UnSaveBlog(int blogId, int userId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var sbDetail = context.SaveBlogs
                        .FirstOrDefault(sb => sb.BlogBlogId == blogId
                        && sb.UserUserId == userId);
                    if (sbDetail == null)
                    {
                        throw new Exception("Not found saved blog.");
                    }

                    // rm 
                    context.SaveBlogs.Remove(sbDetail);
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
