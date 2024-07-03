using AutoMapper;
using BusinessObject.Dtos.UserRoleDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class UserRoleDao
    {
        private readonly IMapper _mapper;
        public UserRoleDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all user role 
        public List<UserRoleReadDtoForAdmin> GetAllUserRole()
        {
            var urList = new List<UserRoleReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.UserRoles.ToList();
                    urList = _mapper.Map<List<UserRoleReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return urList;
        }

        // get user role detail by user role id 
        public UserRoleReadDtoForAdmin GetUserRoleByUserRoleId(int roleId)
        {
            var urDetail = new UserRoleReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var ur = context.UserRoles
                        .FirstOrDefault(ur => ur.RoleId == roleId);
                    if (ur == null)
                    {
                        throw new Exception("Not found user role.");
                    }
                    urDetail = _mapper.Map<UserRoleReadDtoForAdmin>(ur);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return urDetail;
        }

        // create a new user role 
        public void CreateUserRole(UserRoleCretaeDtoForAdmin ur)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newUr = _mapper.Map<UserRole>(ur);
                    context.UserRoles.Add(newUr);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a user role
        public void UpdateUserRole(int roleId, UserRoleUpdateDtoForAdmin ur)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var urDetail = context.UserRoles
                        .FirstOrDefault(ur => ur.RoleId == roleId);
                    if (urDetail == null)
                    {
                        throw new Exception("Not found user role.");
                    }

                    // update 
                    _mapper.Map(ur, urDetail);

                    context.Entry(urDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a user role 
        public void DeleteUserRole(int roleId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var urDetail = context.UserRoles
                        .FirstOrDefault(ur => ur.RoleId == roleId);
                    if (urDetail == null)
                    {
                        throw new Exception("Not found user role.");
                    }

                    // rm
                    context.UserRoles.Remove(urDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
