using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkinDatabase.Data;
using SkinDatabase.Models;
using SQLitePCL;
using SkinDatabase.Repository;
using SkinDatabase.Interfaces;

namespace SkinDatabase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {

        private readonly IDatabaseRepository _DbRepository;
        public DataController(IDatabaseRepository DbRepository) 
        {

            _DbRepository = DbRepository;
        } 

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            try 
            {
                User DBUser = await _DbRepository.GetUserByUsername(user.Username);

                return BadRequest("This Username is already taken");
            }catch (Exception ex) 
            {
                await _DbRepository.AddUser(user);

                return Ok(user);
            }


        }

        [HttpGet("{username}")]
        public async Task<ActionResult<List<User>>> GetUser(string username)
        {
            try
            {
                var character = await _DbRepository.GetUserByUsername(username);
                return Ok(character);
            }
            catch (ArgumentException e)
            {

                return BadRequest(String.Format("{0}: {1}", e.GetType().Name, e.Message));

            }

            
        }
        [Route("Login")]
        [HttpPost]
        public async Task<ActionResult<int>> LoginUser(User user)
        {
            User DBUser;

            try
            {
                DBUser = await _DbRepository.GetUserByUsername(user.Username);
            }
            catch (ArgumentException e)
            {

                return BadRequest("Invalid Username or Password");

            }

            if (DBUser.Password == user.Password)
            {
                return Ok(user.Username);

            }
            else
            {
                return BadRequest("Invalid Username or Password");
            }

            
        }


    }
}
