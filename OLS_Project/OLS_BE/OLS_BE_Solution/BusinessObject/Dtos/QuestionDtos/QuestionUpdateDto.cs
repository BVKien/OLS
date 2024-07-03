using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.QuestionDtos
{
    public class QuestionUpdateDtoForAdmin
    {
        public string? QuestionContent { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
