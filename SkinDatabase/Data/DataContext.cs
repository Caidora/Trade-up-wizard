using Microsoft.EntityFrameworkCore;
using SkinDatabase.Models;

namespace SkinDatabase.Data
{
    public class DataContext : DbContext
    {


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {


        }
        public DbSet<User> Users { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractToSkin> ContractToSkins { get; set; }
        public DbSet<Follow> Follows { get; set; }
        public DbSet<Skin> Skins { get; set; }
        public DbSet<Collection> Collections { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite(@"Data Source=./SkinsDB.db");
    }
}
