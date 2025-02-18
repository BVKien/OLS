﻿using AutoMapper;
using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Dtos.BlogTopicDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class BlogTopicDao
    {
        private readonly IMapper _mapper;
        public BlogTopicDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer == 
        // get all blog topic
        public List<BlogTopicReadDtoForCustomer> GetAllBlogTopicForCustomer()
        {
            var btList = new List<BlogTopicReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.BlogTopics.ToList();
                    btList = _mapper.Map<List<BlogTopicReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return btList;
        }

        // == expert ==
        // get all blog topic 
        public List<BlogTopicReadDtoForExpert> GetAllBlogTopicForExpert()
        {
            var btList = new List<BlogTopicReadDtoForExpert>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.BlogTopics.ToList();
                    btList = _mapper.Map<List<BlogTopicReadDtoForExpert>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return btList;
        }

        // get blog by blog id 
        public BlogTopicReadDtoForExpert GetBlogTopicByBlogTopicIdForExpert(int btId)
        {
            var btDetail = new BlogTopicReadDtoForExpert();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var bt = context.BlogTopics
                        .FirstOrDefault(bt => bt.BlogTopicId == btId);
                    if (bt == null)
                    {
                        throw new Exception("Not found blog topic.");
                    }
                    btDetail = _mapper.Map<BlogTopicReadDtoForExpert>(bt);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return btDetail;
        }

        // create a new blog topic 
        public void CreateBlogTopic(BlogTopicCreateDtoForExpert bt)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newBt = _mapper.Map<BlogTopic>(bt);
                    context.BlogTopics.Add(newBt);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a blog topic 
        public void UpdateBlogTopic(int btId, BlogTopicUpdateDtoForExpert bt)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var btDetail = context.BlogTopics
                        .FirstOrDefault(bt => bt.BlogTopicId == btId);
                    if (btDetail == null)
                    {
                        throw new Exception("Not found blog topic.");
                    }

                    // update 
                    _mapper.Map(bt, btDetail);

                    context.Entry(btDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a blog topic 
        public void DeleteBlogTopic(int btId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var btDetail = context.BlogTopics
                        .FirstOrDefault(bt => bt.BlogTopicId == btId);
                    if (btDetail == null)
                    {
                        throw new Exception("Not found blog topic.");
                    }

                    // rm
                    context.BlogTopics.Remove(btDetail);
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
