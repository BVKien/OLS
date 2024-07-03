using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AnswerDtos
{
    public class AnswerUpdateDtoForAdmin
    {
        public string? ContentFor { get; set; }
        public int? IsTrue { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
