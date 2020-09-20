using Microsoft.EntityFrameworkCore.Migrations;

namespace lauthai_api.Migrations
{
    public partial class XoaCotTenFeedback : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Feedbacks");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Feedbacks",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
