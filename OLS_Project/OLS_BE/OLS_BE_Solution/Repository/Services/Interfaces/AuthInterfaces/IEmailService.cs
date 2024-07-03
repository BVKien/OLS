using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.AuthInterfaces
{
    public interface IEmailService
    {
        Task SendVerificationCodeAsync(string email, string code);
    }
}
