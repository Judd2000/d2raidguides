using Microsoft.EntityFrameworkCore;
using webapp_practice.Models;

namespace webapp_practice.Data
{
// Manages database connection and executes queries.
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Customer> Customers {  get; set; }
  }
}
