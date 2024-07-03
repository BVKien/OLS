using AutoMapper;
using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.UserDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<User, UserReadDtoForCustomer>()
                .ReverseMap();

            // == admin == 
        }
    }
}
