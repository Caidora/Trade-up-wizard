﻿
using Microsoft.EntityFrameworkCore;
using SkinDatabase.Data;
using SkinDatabase.Interfaces;
using SkinDatabase.Models;



namespace SkinDatabase.Repository
{
    public class DatabaseRepository : IDatabaseRepository
    {
        private readonly DataContext _context;





        public DatabaseRepository(DataContext context) 
        {
            _context = context;
        
        }
        async Task<Contract> IDatabaseRepository.AddContractToUser(User user, Contract contract)
        {
            throw new NotImplementedException();
        }

        async Task<bool> IDatabaseRepository.AddUser(User user)
        {


            _context.Users.Add(user);

            if (await _context.SaveChangesAsync() != 0)
            {

                return true;
            }
            else
            {
                return false;
            }
        }

        async Task<bool> IDatabaseRepository.DeleteUser(User user)
        {
            throw new NotImplementedException();
        }

        async Task<List<Contract>> IDatabaseRepository.GetContractsByUser(User user)
        {
            throw new NotImplementedException();
        }

        async Task<List<Skin>> IDatabaseRepository.GetSkinsByRarity(string Rarity)
        {
            throw new NotImplementedException();
        }

        async Task<User> IDatabaseRepository.GetUserByUsername(string username)
        {

            var character = await _context.Users.FirstOrDefaultAsync(User => User.Username == username);
            if (character == null)
            {
                throw new ArgumentException(string.Format("{0} {1}",username, "is not a valid username"));
            }
            return character;


        }

        async Task<User> IDatabaseRepository.ModifyUserPass(User user, string password)
        {
            throw new NotImplementedException();
        }
    }
}