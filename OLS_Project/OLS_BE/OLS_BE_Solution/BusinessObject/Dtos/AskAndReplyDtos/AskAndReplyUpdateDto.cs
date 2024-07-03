using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AskAndReplyDtos
{
    public class AskAndReplyUpdateDtoForCustomer
    {
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
