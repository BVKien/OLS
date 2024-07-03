using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.LearningPathDtos
{
    public class LearningPathUpdateDtoForAdmin
    {
        public string? LearningPathName { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public int? Status { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
