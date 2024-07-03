using BusinessObject.Dtos.UserRoleDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IUserRoleRepository
    {
        public List<UserRoleReadDtoForAdmin> GetAllUserRole();
        public UserRoleReadDtoForAdmin GetUserRoleByUserRoleId(int roleId);
        public void CreateUserRole(UserRoleCretaeDtoForAdmin ur);
        public void UpdateUserRole(int roleId, UserRoleUpdateDtoForAdmin ur);
        public void DeleteUserRole(int roleId);
    }
}
