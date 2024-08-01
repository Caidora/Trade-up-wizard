using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class Skin
    {
        [Key]
        public int skinID { get; set; }

        [Required]
        [MaxLength(40)]
        public string skinName { get; set; } = string.Empty;

        [Required]
        public string collectionName { get; set; } = string.Empty;

        [Required]
        [MaxLength(20)]
        public string rarity { get; set; } = string.Empty;

        [Required]
        [MaxLength(20)]
        public double minfloat { get; set; } = 0.0;

        [Required]
        [MaxLength(20)]
        public double maxfloat { get; set; } = 1.0;

        [Required]
        [MaxLength(20)]
        public string imageUrl { get; set; } = string.Empty;

    }
}
