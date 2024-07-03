using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;
using DataAccess.Dao.AuthDao;
using Repository.Services.Interfaces.AuthInterfaces;

namespace Repository.Services.Implements.AuthImplements
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AuthDao _authDao;
        public AuthRepository() { }
        public AuthRepository(AuthDao authDao)
        {
            _authDao = authDao;
        }

        public LoginDtoInfoForAuth Login(string email, string password)
            => _authDao.Login(email, password);
        public RegisterDtoInfoForAuth Register(RegisterDtoForAuth register)
            => _authDao.Register(register);
        public void SendVerificationCode(string email)
            => _authDao.SendVerificationCode(email);
        public bool VerifyCode(string email, string code)
            => _authDao.VerifyCode(email, code);
        public void ResetPassword(ResetPasswordDtoForAuth info)
            => _authDao.ResetPassword(info);
    }
}
