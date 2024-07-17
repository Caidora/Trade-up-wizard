using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        [MaxLength(20)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [MaxLength(20)]
        public string Password { get; set; } = string.Empty;
    }
}
