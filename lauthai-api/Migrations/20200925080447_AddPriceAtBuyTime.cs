using Microsoft.EntityFrameworkCore.Migrations;

namespace lauthai_api.Migrations
{
    public partial class AddPriceAtBuyTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "PriceAtBuyTime",
                table: "OrderDetails",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PriceAtBuyTime",
                table: "OrderDetails");
        }
    }
}
