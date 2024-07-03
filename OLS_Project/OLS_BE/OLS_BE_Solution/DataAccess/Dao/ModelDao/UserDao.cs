using AutoMapper;
using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Dtos.UserDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class UserDao
    {
        private readonly IMapper _mapper;
        public UserDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == using direct model User ==
        // get user by email and password 
        public User GetUserByEmailAndPassword(string email, string password)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var user = context.Users
                        .Where(u => u.Email == email && u.Password == password)
                        .Include(u => u.UserRoleRole)
                        .FirstOrDefault();

                    if (user == null)
                    {
                        throw new Exception("User not found.");
                    }

                    return user;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // get user by email
        public User GetUserByEmail(string email)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var user = context.Users
                        .Where(u => u.Email == email)
                        .Include(u => u.UserRoleRole)
                        .FirstOrDefault();

                    if (user == null)
                    {
                        throw new Exception("User not found.");
                    }

                    return user;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // == customer == 
        // get user info by user id
        public UserReadDtoForCustomer GetUserInfoByUserIdForCustomer(int userId)
        {
            var userInfo = new UserReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var user = context.Users
                        .Include(u => u.UserRoleRole)
                        .FirstOrDefault(u => u.UserId == userId);
                    if (user == null)
                    {
                        throw new Exception("Not found user information.");
                    }
                    userInfo = _mapper.Map<UserReadDtoForCustomer>(user);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return userInfo;
        }

        // update user info by user id 
        public void UpdateUserDetailByUserIdForCustomer(int userId, UserUpdateDtoForCustomer user)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userInfo = context.Users
                        .FirstOrDefault(u => u.UserId == userId);
                    if (userInfo == null)
                    {
                        throw new Exception("Not found user infomation.");
                    }

                    // update 
                    _mapper.Map(user, userInfo);

                    context.Entry(userInfo).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        // == admin == 
        // get all user 
        public List<UserReadDtoForAdmin> GetAllUser()
        {
            var userList = new List<UserReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Users
                        .Include(u => u.UserRoleRole)
                        .ToList();
                    userList = _mapper.Map<List<UserReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return userList;
        }

        // get user info by user id
        public UserReadDtoForAdmin GetUserDetailByUserIdForAdmin(int userId)
        {
            var userInfo = new UserReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var user = context.Users
                        .Include(u => u.UserRoleRole)
                        .FirstOrDefault(u => u.UserId == userId);
                    if (user == null)
                    {
                        throw new Exception("Not found user information.");
                    }
                    userInfo = _mapper.Map<UserReadDtoForAdmin>(user);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return userInfo;
        }

        // update user info by user id 
        public void UpdateUserDetailByUserIdForAdmin(int userId, UserUpdateDtoForAdmin user)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userInfo = context.Users
                        .FirstOrDefault(u => u.UserId == userId);
                    if (userInfo == null)
                    {
                        throw new Exception("Not found user infomation.");
                    }

                    // update 
                    _mapper.Map(user, userInfo);

                    context.Entry(userInfo).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // create a new user
        public void CreateUser(UserCreateDtoForAdmin user)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newUser = _mapper.Map<User>(user);
                    context.Users.Add(newUser);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a user by user id 
        public void UpdateUser(int userId, UserUpdateDtoForAdmin user)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userDetail = context.Users
                        .FirstOrDefault(u => u.UserId == userId);
                    if (userDetail == null)
                    {
                        throw new Exception("Not found user detail.");
                    }

                    // update 
                    _mapper.Map(user, userDetail);

                    context.Entry(user).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // ban a user by user id 
        public void BanUser(int userId, int roleId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userDetail = context.Users
                        .FirstOrDefault(u => u.UserId == userId);
                    if (userDetail == null)
                    {
                        throw new Exception("Not found user detail.");
                    }
                    if (roleId == 1)
                    {
                        throw new Exception("User will be banned cannot be an admin.");
                    }
                    // update status -> 0 -> ban
                    var banStatus = new UserUpdateDtoForAdmin
                    {
                        Status = 0
                    };
                    _mapper.Map(banStatus, userDetail);

                    context.Entry(userDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // unban a user by user id 
        public void UnBanUser(int userId, int roleId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userDetail = context.Users
                        .FirstOrDefault(u => u.UserId == userId);
                    if (userDetail == null)
                    {
                        throw new Exception("Not found user detail.");
                    }
                    if (roleId == 1)
                    {
                        throw new Exception("User will be unbanned cannot be an admin.");
                    }
                    // update status -> 0 -> ban
                    var banStatus = new UserUpdateDtoForAdmin
                    {
                        Status = 1
                    };
                    _mapper.Map(banStatus, userDetail);

                    context.Entry(userDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a user
        public void DeleteUser(int userId, int roleId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var userDetail = context.Users
                        .FirstOrDefault(u => u.UserId == userId
                        && u.UserRoleRoleId == roleId);
                    if (userDetail == null)
                    {
                        throw new Exception("Not found user detail.");
                    }
                    if (roleId == 1)
                    {
                        throw new Exception("User will be delete cannot be an admin.");
                    }

                    // rm
                    context.Users.Remove(userDetail);
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
