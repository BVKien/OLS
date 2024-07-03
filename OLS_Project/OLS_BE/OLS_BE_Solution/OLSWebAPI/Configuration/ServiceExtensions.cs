using DataAccess.Dao;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BusinessObject.Dtos.AuthDto;
using BusinessObject.Models;
using DataAccess.Dao.ModelDao;
using Repository.Services.Implements.ModelImplement;
using Repository.Services.Interfaces.ModelInterface;
using Repository.Services.Interfaces.ModelInterfaces;
using Repository.Services.Implements.ModelImplements;
using DataAccess.Dao.AuthDao;
using Repository.Services.Interfaces.AuthInterfaces;
using Repository.Services.Implements.AuthImplements;
using System.Net.Mail;
using System.Net;
using BusinessObject.Dtos.AuthDtos;

namespace OLSWebAPI.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureDbContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<OLS_PRN231_V1Context>(options =>
                options.UseSqlServer(connectionString));
        }

        public static void ConfigureAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Program));
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }

        public static void ConfigureRepositories(this IServiceCollection services)
        {
            // == Register Dao == 
            services.AddScoped<AuthDao>();
            services.AddScoped<UserDao>();
            services.AddScoped<UserRoleDao>();
            services.AddScoped<CourseDao>();
            services.AddScoped<LearningPathDao>();
            services.AddScoped<CourseEnrolledDao>();
            services.AddScoped<ChapterDao>();
            services.AddScoped<LessonDao>();
            services.AddScoped<NoteDao>();
            services.AddScoped<DiscussDao>();
            services.AddScoped<FeedBackDao>();
            services.AddScoped<QuizDao>();
            services.AddScoped<QuestionDao>();
            services.AddScoped<AnswerDao>();
            services.AddScoped<AskAndReplyDao>();
            services.AddScoped<NotificationDao>();
            services.AddScoped<BlogDao>();
            services.AddScoped<BlogTopicDao>();
            services.AddScoped<SaveBlogDao>();
            services.AddScoped<BlogCommentDao>();

            // == Register Repository ==
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserRoleRepository, UserRoleRepository>();
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<ILearningPathRepository, LearningPathRepository>();
            services.AddScoped<ICourseEnrolledRepository, CourseEnrolledRepository>();
            services.AddScoped<IChapterRepository, ChapterRepository>();
            services.AddScoped<ILessonRepository, LessonRepository>();
            services.AddScoped<INoteRepository, NoteRepository>();
            services.AddScoped<IDiscussRepository, DiscussRepository>();
            services.AddScoped<IFeedbackRepository, FeedbackRepository>();
            services.AddScoped<IQuizRepository, QuizRepository>();
            services.AddScoped<IQuestionRepository, QuestionRepository>();
            services.AddScoped<IAnswerRepository, AnswerRepository>();
            services.AddScoped<IAskAndReplyRepository, AskAndReplyRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<IBlogRepository, BlogRepository>();
            services.AddScoped<IBlogTopicRepository, BlogTopicRepository>();
            services.AddScoped<ISaveBlogRepository, SaveBlogRepository>();
            services.AddScoped<IBlogCommentRepository, BlogCommentRepository>();
        }

        public static void ConfigureJwtAuthentication(this IServiceCollection services, JwtSettings jwtSettings)
        {
            var key = Encoding.ASCII.GetBytes(jwtSettings.Key);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = jwtSettings.Issuer,
                        ValidAudience = jwtSettings.Audience,
                        IssuerSigningKey = new SymmetricSecurityKey(key)
                    };
                });
        }

        public static void ConfigureCors(this IServiceCollection services, string origin)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(origin)
                           .AllowAnyMethod()
                           .AllowAnyHeader()
                           .AllowCredentials();
                });
            });
        }

        public static void ConfigureEmailVerification(this IServiceCollection services, SmtpSettings smtpSettings)
        {
            if (smtpSettings == null)
            {
                throw new ArgumentNullException(nameof(smtpSettings), "SMTP settings are null.");
            }

            services.AddTransient<SmtpClient>(sp =>
            {
                return new SmtpClient
                {
                    Host = smtpSettings.Host,
                    Port = smtpSettings.Port,
                    EnableSsl = smtpSettings.EnableSsl,
                    Credentials = new NetworkCredential(smtpSettings.FromEmail, smtpSettings.Password)
                };
            });
        }
    }
}
