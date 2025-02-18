﻿using AutoMapper;
using BusinessObject.Dtos.ChapterDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class ChapterMappingProfile : Profile
    {
        public ChapterMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<Chapter, ChapterReadDtoForCustomer>()
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.CourseCourse.CourseName))
                .ReverseMap();

            CreateMap<Chapter, ChapterReadDtoForCustomer>().ReverseMap();

            // == admin == 
            CreateMap<Chapter, ChapterReadDtoForAdmin>().ReverseMap();
            CreateMap<Chapter, ChapterCreateDtoForAdmin>().ReverseMap();
            CreateMap<Chapter, ChapterUpdateDtoForAdmin>().ReverseMap();
        }
    }
}
