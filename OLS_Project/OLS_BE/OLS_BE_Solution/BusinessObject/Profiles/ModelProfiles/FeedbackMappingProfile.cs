using AutoMapper;
using BusinessObject.Dtos.FeedBackDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class FeedbackMappingProfile : Profile
    {
        public FeedbackMappingProfile()
        {
            // dest => src 
            CreateMap<FeedBack, FeedBackReadDtoForCustomer>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ForMember(dest => dest.UserImage, opt => opt.MapFrom(src => src.UserUser.Image))
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.CourseCourse.CourseName))
                .ReverseMap();
            CreateMap<FeedBack, FeedBackCreateDtoForCustomer>().ReverseMap();
            CreateMap<FeedBack, FeedBackUpdateDtoForCustomer>().ReverseMap();
        }
    }
}
