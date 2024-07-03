using AutoMapper;
using BusinessObject.Dtos.BlogTopicDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class BlogTopicMappingProfile : Profile
    {
        public BlogTopicMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<BlogTopic, BlogTopicReadDtoForCustomer>().ReverseMap();

            // == expert == 
            CreateMap<BlogTopic, BlogTopicReadDtoForExpert>().ReverseMap();
            CreateMap<BlogTopic, BlogTopicCreateDtoForExpert>().ReverseMap();
            CreateMap<BlogTopic, BlogTopicUpdateDtoForExpert>().ReverseMap();
        }
    }
}
