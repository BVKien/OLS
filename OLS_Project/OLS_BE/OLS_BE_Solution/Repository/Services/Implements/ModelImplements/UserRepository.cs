using BusinessObject.Dtos.UserDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDao _userDao;
        public UserRepository() { }
        public UserRepository(UserDao userDao)
        {
            _userDao = userDao;
        }

        // == customer == 
        public UserReadDtoForCustomer GetUserInfoByUserIdForCustomer(int userId)
            => _userDao.GetUserInfoByUserIdForCustomer(userId);
        public void UpdateUserDetailByUserIdForCustomer(int userId, UserUpdateDtoForCustomer user)
            => _userDao.UpdateUserDetailByUserIdForCustomer(userId, user);

        // == admin == 
        public List<UserReadDtoForAdmin> GetAllUser()
            => _userDao.GetAllUser();
        public UserReadDtoForAdmin GetUserDetailByUserIdForAdmin(int userId)
            => _userDao.GetUserDetailByUserIdForAdmin(userId);
        public void UpdateUserDetailByUserIdForAdmin(int userId, UserUpdateDtoForAdmin user)
            => _userDao.UpdateUserDetailByUserIdForAdmin(userId, user);
        public void CreateUser(UserCreateDtoForAdmin user)
            => _userDao.CreateUser(user);
        public void UpdateUser(int userId, UserUpdateDtoForAdmin user)
            => _userDao.UpdateUser(userId, user);
        public void BanUser(int userId, int roleId)
            => _userDao.BanUser(userId, roleId);
        public void UnBanUser(int userId, int roleId)
            => _userDao.UnBanUser(userId, roleId);
        public void DeleteUser(int userId, int roleId)
            => _userDao.DeleteUser(userId, roleId);
    }
}
