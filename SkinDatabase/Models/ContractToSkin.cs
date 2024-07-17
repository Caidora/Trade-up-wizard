using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class ContractToSkin
    {
        [Key]
        public int relationshipID { get; set; }

        [Required]
        [MaxLength(40)]
        public int skinID { get; set; }

        [Required]
        public int collectionID { get; set; }

        [Required]
        [MaxLength(20)]
        public string rarity { get; set; } = string.Empty;

    }
}
