using Repository.Services.Interfaces.AuthInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.AuthImplements
{
    public class EmailService : IEmailService
    {
        private readonly SmtpClient _smtpClient;

        public EmailService(SmtpClient smtpClient)
        {
            _smtpClient = smtpClient;
        }

        public async Task SendVerificationCodeAsync(string email, string code)
        {
            var message = new MailMessage();
            message.To.Add(email);
            message.Subject = "Email Verification Code";
            message.Body = $"Your verification code is: {code}";

            await _smtpClient.SendMailAsync(message);
        }
    }
}
