using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class Follow
    {
        [Key]
        public int followsID { get; set; }

        [Required]
        public int followedUserID { get; set; }

        [Required]
        public int followingUserID { get; set; }

        [Required]
        public int createdAt { get; set; }
    }
}
