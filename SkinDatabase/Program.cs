using SkinDatabase.Data;
using SkinDatabase.Interfaces;
using SkinDatabase.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:5173", "https://purple-ground-05b7a451e.5.azurestaticapps.net", "https://victorious-river-0616bfb1e.5.azurestaticapps.net");
        });
});

builder.Services.AddDbContext<DataContext>();
builder.Services.AddScoped<IDatabaseRepository, DatabaseRepository>();
var app = builder.Build();

app.UseCors("CORSPolicy");

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();



app.MapControllers();

app.Run();
