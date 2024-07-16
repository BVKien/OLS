using AutoMapper;
using BusinessObject.Dtos.AskAndReplyDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class AskAndReplyMappingProfile : Profile
    {
        public AskAndReplyMappingProfile()
        {
            // dest => src 
            CreateMap<AskAndReply, AskAndReplyReadDtoForCustomer>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ForMember(dest => dest.Avatar, opt => opt.MapFrom(src => src.UserUser.Image))
                .ReverseMap();
            CreateMap<AskAndReply, AskAndReplyCreateDtoForCustomer>().ReverseMap();
            CreateMap<AskAndReply, AskAndReplyUpdateDtoForCustomer>().ReverseMap();
        }
    }
}
