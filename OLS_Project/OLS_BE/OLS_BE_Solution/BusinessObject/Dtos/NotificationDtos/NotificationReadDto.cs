using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.NotificationDtos
{
    public class NotificationReadDtoForAdmin
    {
        public int NotificationId { get; set; }
        public string? ContentFor { get; set; }
        public int CourseCourseId { get; set; }
        public string? CourseName { get; set; }
        public int UserUserId { get; set; }
        public string? UserName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class NotificationReadDtoForCustomer
    {
        public int NotificationId { get; set; }
        public string? ContentFor { get; set; }
        public int CourseCourseId { get; set; }
        public string? CourseName { get; set; }
        public int UserUserId { get; set; }
        public string? UserName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
