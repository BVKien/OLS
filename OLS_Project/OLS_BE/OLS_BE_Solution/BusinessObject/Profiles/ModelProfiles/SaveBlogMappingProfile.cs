using AutoMapper;
using BusinessObject.Dtos.SaveBlogDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class SaveBlogMappingProfile : Profile
    {
        public SaveBlogMappingProfile()
        {
            // dest => src 
            CreateMap<SaveBlog, SaveBlogReadDtoForCustomer>()
                .ForMember(dest => dest.BlogTitle, opt => opt.MapFrom(src => src.BlogBlog.BlogTitle))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ReverseMap();
            CreateMap<SaveBlog, SaveBlogCreateDtoForCustomer>().ReverseMap();
        }
    }
}
