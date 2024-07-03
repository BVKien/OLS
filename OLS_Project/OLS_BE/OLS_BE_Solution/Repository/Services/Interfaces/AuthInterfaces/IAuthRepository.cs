using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;

namespace Repository.Services.Interfaces.AuthInterfaces
{
    public interface IAuthRepository
    {
        LoginDtoInfoForAuth Login(string email, string password);
        RegisterDtoInfoForAuth Register(RegisterDtoForAuth register);
        void SendVerificationCode(string email);
        bool VerifyCode(string email, string code);
        void ResetPassword(ResetPasswordDtoForAuth info); 
    }
}