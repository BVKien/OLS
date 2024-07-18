using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OLSWebAPI.Extensions;

namespace OLSWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Configure DbContext with SQL Server
            var connectionString = builder.Configuration.GetConnectionString("cnn");
            builder.Services.ConfigureDbContext(connectionString);

            // Configure AutoMapper
            builder.Services.ConfigureAutoMapper();

            // Configure Repositories and DAOs
            builder.Services.ConfigureRepositories();

            // Configure JWT Authentication
            var jwtSettings = builder.Configuration.GetSection("Jwt").Get<JwtSettings>();
            builder.Services.ConfigureJwtAuthentication(jwtSettings);

            // Configure CORS for ReactJS default port
            builder.Services.ConfigureCors("http://localhost:3003");

            // Configure Email Verification using SMTP settings
            var smtpSettings = builder.Configuration.GetSection("SmtpSettings").Get<SmtpSettings>();
            builder.Services.ConfigureEmailVerification(smtpSettings);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication(); // Ensure Authentication Middleware is added
            app.UseAuthorization();
            app.UseCors(); // Apply CORS policy

            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.MapControllers();
            app.Run();
        }
    }
}
