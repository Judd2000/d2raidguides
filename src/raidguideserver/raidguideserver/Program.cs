var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddCors((options) =>
{
  options.AddPolicy("MobileAppPolicy", (policy) =>
  {
    policy.WithOrigins("d2raidguides://localhost");
  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.MapOpenApi();
}

// Produces 307 and redirects to HTTPS if http is hit.
//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
