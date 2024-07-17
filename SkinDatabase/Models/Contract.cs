using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class Contract
    {
        [Key]
        public int contractID { get; set; }

        [Required]
        public int createdBy { get; set; }


    }
}
