using System.Security.Cryptography;
using System.Text;

namespace OLSWebAPI.Helper
{
    public class HelperFunctions
    {
        public HelperFunctions() { }

        // create MD5
        public static string CreateMD5(string input) // Change private to public
        {
            // Use input string to calculate MD5 hash
            using (var md5 = MD5.Create())
            {
                var inputBytes = Encoding.ASCII.GetBytes(input);
                var hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string
                var sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2").ToLower());
                }
                return sb.ToString();
            }
        }
    }
}