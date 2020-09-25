using Microsoft.EntityFrameworkCore.Migrations;

namespace lauthai_api.Migrations
{
    public partial class AddNameAtBuyTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NameAtBuyTime",
                table: "OrderDetails",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NameAtBuyTime",
                table: "OrderDetails");
        }
    }
}
