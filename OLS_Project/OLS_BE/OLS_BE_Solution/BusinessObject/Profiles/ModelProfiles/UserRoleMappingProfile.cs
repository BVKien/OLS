using AutoMapper;
using BusinessObject.Dtos.UserRoleDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class UserRoleMappingProfile : Profile
    {
        public UserRoleMappingProfile()
        {
            // dest => src 
            CreateMap<UserRole, UserRoleReadDtoForAdmin>().ReverseMap();
            CreateMap<UserRole, UserRoleCretaeDtoForAdmin>().ReverseMap();
            CreateMap<UserRole, UserRoleUpdateDtoForAdmin>().ReverseMap();
        }
    }
}
