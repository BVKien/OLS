using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OLSWebAPI.Controllers.UploadImg
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        public UploadController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost("UploadImage")]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // Thư mục lưu trữ ảnh trong wwwroot
            var uploadsFolder = Path.Combine(_hostingEnvironment.WebRootPath, "images", "payment");

            // Tạo thư mục nếu chưa tồn tại
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            // Tạo tên file duy nhất
            var uniqueFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            // Lưu file vào đường dẫn filePath
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(fileStream);
            }

            // Đường dẫn URL truy cập ảnh
            var imageUrl = $"{Request.Scheme}://{Request.Host}/images/payment/{uniqueFileName}";

            return Ok(new { ImageUrl = imageUrl });
        }
    }
}