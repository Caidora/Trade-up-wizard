using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkinDatabase.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Collections",
                columns: table => new
                {
                    CollectionName = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Collections", x => x.CollectionName);
                });

            migrationBuilder.CreateTable(
                name: "Contracts",
                columns: table => new
                {
                    contractID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    createdBy = table.Column<string>(type: "TEXT", nullable: false),
                    title = table.Column<string>(type: "TEXT", nullable: false),
                    rarity = table.Column<string>(type: "TEXT", nullable: false),
                    skinName0 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName1 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName2 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName3 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName4 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName5 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName6 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName7 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName8 = table.Column<string>(type: "TEXT", nullable: false),
                    skinName9 = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contracts", x => x.contractID);
                });

            migrationBuilder.CreateTable(
                name: "ContractToSkins",
                columns: table => new
                {
                    relationshipID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    skinID = table.Column<int>(type: "INTEGER", maxLength: 40, nullable: false),
                    collectionID = table.Column<int>(type: "INTEGER", nullable: false),
                    rarity = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContractToSkins", x => x.relationshipID);
                });

            migrationBuilder.CreateTable(
                name: "Follows",
                columns: table => new
                {
                    followsID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    followedUserID = table.Column<int>(type: "INTEGER", nullable: false),
                    followingUserID = table.Column<int>(type: "INTEGER", nullable: false),
                    createdAt = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Follows", x => x.followsID);
                });

            migrationBuilder.CreateTable(
                name: "Skins",
                columns: table => new
                {
                    skinID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    skinName = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    collectionName = table.Column<string>(type: "TEXT", nullable: false),
                    rarity = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    minfloat = table.Column<double>(type: "REAL", maxLength: 20, nullable: false),
                    maxfloat = table.Column<double>(type: "REAL", maxLength: 20, nullable: false),
                    imageUrl = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    price = table.Column<double>(type: "REAL", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skins", x => x.skinID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Collections");

            migrationBuilder.DropTable(
                name: "Contracts");

            migrationBuilder.DropTable(
                name: "ContractToSkins");

            migrationBuilder.DropTable(
                name: "Follows");

            migrationBuilder.DropTable(
                name: "Skins");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
