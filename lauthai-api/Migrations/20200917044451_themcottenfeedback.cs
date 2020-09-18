using Microsoft.EntityFrameworkCore.Migrations;

namespace lauthai_api.Migrations
{
    public partial class themcottenfeedback : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Feedbacks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Feedbacks");
        }
    }
}
