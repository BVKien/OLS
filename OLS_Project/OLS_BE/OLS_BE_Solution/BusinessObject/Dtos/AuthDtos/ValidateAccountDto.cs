using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AuthDtos
{
    public class ValidateAccountDtoForAuth
    {
        public string? Email { get; set; }
        public string? CodeVerify { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class SendVerificationCodeDto
    {
        public string Email { get; set; }
    }

    public class VerifyCodeDto
    {
        public string Email { get; set; }
        public string Code { get; set; }
    }

    public class SmtpSettings
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool EnableSsl { get; set; }
        public string FromEmail { get; set; }
        public string Password { get; set; }
        public string FromAddress { get; set; }
    }
}
