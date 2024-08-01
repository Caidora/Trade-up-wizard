using System;
using System.ComponentModel.DataAnnotations;

namespace SkinDatabase.Models
{
    public class Collection
    {

        [Key]
        public string CollectionName { get; set; } = string.Empty;


        [Required]
        public string ImageUrl { get; set; } = string.Empty;
    }
}
