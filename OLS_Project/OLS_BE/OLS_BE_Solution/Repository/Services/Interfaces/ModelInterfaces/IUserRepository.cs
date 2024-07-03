using BusinessObject.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IUserRepository
    {
        // == customer == 
        UserReadDtoForCustomer GetUserInfoByUserIdForCustomer(int userId);
        void UpdateUserDetailByUserIdForCustomer(int userId, UserUpdateDtoForCustomer user);

        // == admin == 
        List<UserReadDtoForAdmin> GetAllUser(); 
        UserReadDtoForAdmin GetUserDetailByUserIdForAdmin(int userId);
        void UpdateUserDetailByUserIdForAdmin(int userId, UserUpdateDtoForAdmin user);
        public void CreateUser(UserCreateDtoForAdmin user);
        void UpdateUser(int userId, UserUpdateDtoForAdmin user);
        void BanUser(int userId, int roleId);
        void UnBanUser(int userId, int roleId);
        void DeleteUser(int userId, int roleId);
    }
}
