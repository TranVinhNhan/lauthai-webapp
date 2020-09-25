using Microsoft.EntityFrameworkCore.Migrations;

namespace lauthai_api.Migrations
{
    public partial class AddPhoneAtBuyTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhoneAtBuyTime",
                table: "OrderDetails",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhoneAtBuyTime",
                table: "OrderDetails");
        }
    }
}
