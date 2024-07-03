using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.CourseEnrolledDtos
{
    public class CourseEnrolledCreateDtoForCustomer
    {
        public DateTime? EnrolledDate { get; set; }
        public int? Status { get; set; }
        public int CourseCourseId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
