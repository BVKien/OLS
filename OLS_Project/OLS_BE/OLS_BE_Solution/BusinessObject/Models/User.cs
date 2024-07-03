using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class User
    {
        public User()
        {
            AskAndReplies = new HashSet<AskAndReply>();
            BlogComments = new HashSet<BlogComment>();
            Blogs = new HashSet<Blog>();
            CourseEnrolleds = new HashSet<CourseEnrolled>();
            Courses = new HashSet<Course>();
            FeedBacks = new HashSet<FeedBack>();
            Notes = new HashSet<Note>();
            Notifications = new HashSet<Notification>();
            SaveBlogs = new HashSet<SaveBlog>();
        }

        public int UserId { get; set; }
        public string? Email { get; set; }
        public string? Facebook { get; set; }
        public string? Github { get; set; }
        public string? Phone { get; set; }
        public string? Password { get; set; }
        public string? FullName { get; set; }
        public DateTime? Dob { get; set; }
        public string? Address { get; set; }
        public string? Bio { get; set; }
        public string? Image { get; set; }
        public string? BackgroundImage { get; set; }
        public string? GmailId { get; set; }
        public string? FacebookId { get; set; }
        public string? GithubId { get; set; }
        public int? Status { get; set; }
        public string? CodeVerify { get; set; }
        public int UserRoleRoleId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual UserRole UserRoleRole { get; set; } = null!;
        public virtual ICollection<AskAndReply> AskAndReplies { get; set; }
        public virtual ICollection<BlogComment> BlogComments { get; set; }
        public virtual ICollection<Blog> Blogs { get; set; }
        public virtual ICollection<CourseEnrolled> CourseEnrolleds { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<FeedBack> FeedBacks { get; set; }
        public virtual ICollection<Note> Notes { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
        public virtual ICollection<SaveBlog> SaveBlogs { get; set; }
    }
}
