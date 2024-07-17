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
        public int collectionID { get; set; }

        [Required]
        [MaxLength(20)]
        public string rarity { get; set; } = string.Empty;

    }
}
