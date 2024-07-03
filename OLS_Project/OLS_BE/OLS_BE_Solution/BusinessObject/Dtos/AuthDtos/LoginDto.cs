using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AuthDto
{
    public class LoginDtoForAuth 
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }

    public class LoginDtoInfoForAuth
    {
        public int UserId { get; set; }
        public string? Email { get; set; }
        public string? RoleName { get; set; }
    }
}
