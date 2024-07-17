using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkinDatabase.Data;
using SkinDatabase.Models;
using SQLitePCL;

namespace SkinDatabase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly DataContext _context;
        public DataController(DataContext context) 
        {
            _context = context;
        } 

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return Ok(user);


        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<List<User>>> GetUser(string username)
        {

            var character = await _context.Users.FirstOrDefaultAsync(User => User.Username == username);
            if (character == null){
                return BadRequest("user not found");

            }

            return Ok(character);
        }
    }
}
