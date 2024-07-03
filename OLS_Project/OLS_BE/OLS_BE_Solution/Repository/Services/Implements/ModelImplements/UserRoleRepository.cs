using BusinessObject.Dtos.UserRoleDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class UserRoleRepository : IUserRoleRepository
    {
        private readonly UserRoleDao _userRoleDao;
        public UserRoleRepository() { }
        public UserRoleRepository(UserRoleDao userRoleDao)
        {
            _userRoleDao = userRoleDao;
        }

        public List<UserRoleReadDtoForAdmin> GetAllUserRole()
            => _userRoleDao.GetAllUserRole();
        public UserRoleReadDtoForAdmin GetUserRoleByUserRoleId(int roleId)
            => _userRoleDao.GetUserRoleByUserRoleId(roleId);
        public void CreateUserRole(UserRoleCretaeDtoForAdmin ur)
            => _userRoleDao.CreateUserRole(ur);
        public void UpdateUserRole(int roleId, UserRoleUpdateDtoForAdmin ur)
            => _userRoleDao.UpdateUserRole(roleId, ur);
        public void DeleteUserRole(int roleId)
            => _userRoleDao.DeleteUserRole(roleId);
    }
}
