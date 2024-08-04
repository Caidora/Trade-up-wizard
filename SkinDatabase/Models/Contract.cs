using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class Contract
    {
        [Key]
        public int contractID { get; set; }

        [Required]
        public string createdBy { get; set; } = string.Empty;
        [Required]
        public string title { get; set; } = string.Empty;
        [Required]
        public string rarity { get; set; } = string.Empty;
        [Required]
        public string skinName0 { get; set; } = string.Empty;
        [Required]
        public string skinName1 { get; set; } = string.Empty;
        [Required]
        public string skinName2 { get; set; } = string.Empty;
        [Required]
        public string skinName3 { get; set; } = string.Empty;
        [Required]
        public string skinName4 { get; set; } = string.Empty;
        [Required]
        public string skinName5 { get; set; } = string.Empty;
        [Required]
        public string skinName6 { get; set; } = string.Empty;
        [Required]
        public string skinName7 { get; set; } = string.Empty;
        [Required]
        public string skinName8 { get; set; } = string.Empty;
        [Required]
        public string skinName9 { get; set; } = string.Empty;



    }
}
