using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkinDatabase.Data;
using SkinDatabase.Models;
using SQLitePCL;
using SkinDatabase.Repository;
using SkinDatabase.Interfaces;
using SkinDatabase.DTO;

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
        [HttpGet("Contract/{contractID}")]
        public async Task<ActionResult<Contract>> GetContractByID(int contractID)
        {
            try
            {
                var returnContract = await _DbRepository.GetContractByID(contractID);
                return Ok(returnContract);
            }
            catch (ArgumentException e)
            {

                return BadRequest(String.Format("{0}: {1}", e.GetType().Name, e.Message));

            }


        }
        [HttpGet("Page/Explore")]
        public async Task<ActionResult<List<contractDTO>>> GetContracts()
        {
            try
            {
                var contracts = await _DbRepository.GetAllContracts();
                List<contractDTO> ContractsDtos = new List<contractDTO>();
                foreach (var contract in contracts)
                {
                    contractDTO contractDTO = new contractDTO();
                    contractDTO.key = contract.contractID;
                    contractDTO.Title = contract.title;
                    contractDTO.Cost = "10";
                    contractDTO.EstimatedReturn = "12";
                    contractDTO.User = contract.createdBy;
                    contractDTO.Rarity = contract.rarity;
                    ContractsDtos.Add(contractDTO);
                }
                return Ok(ContractsDtos);




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
        [Route("Contract")]
        [HttpPost]
        public async Task<ActionResult<bool>> CreateContract(Contract contract)
        {
                await _DbRepository.CreateContract(contract);
                return Ok(true);



        }
        [HttpGet("skinNames/{rarity}")]
        public async Task<ActionResult<List<String>>> ReturnSkinNames(string rarity)
        {
            var skinNames = await _DbRepository.GetSkinNamesByRarity(rarity);
            return Ok(skinNames);

        }
        [HttpGet("skin/{skinName}")]
        public async Task<ActionResult<Skin>> GetSkin(string skinName)
        {
            try
            {
                var skin = await _DbRepository.GetSkinBySkinName(skinName);
                return Ok(skin);
            }
            catch (ArgumentException e)
            {

                return BadRequest(String.Format("{0}: {1}", e.GetType().Name, e.Message));

            }


        }

    }
}
