﻿using Microsoft.AspNetCore.Mvc;
using SkinDatabase.Models;

namespace SkinDatabase.Interfaces
{
    public interface IDatabaseRepository
    {
        Task<bool> AddUser(User user);
        Task<bool> DeleteUser(User user);
        Task<User> ModifyUserPass(User user, string password);
        Task<User> GetUserByUsername(string username);


        Task<List<Skin>> GetSkinsByRarity(string Rarity);

        Task<List<Contract>> GetContractsByUser(User user);

        Task<Contract> AddContractToUser(User user, Contract contract);

        Task<List<string>> GetSkinNamesByRarity(string rarity);

        Task<Skin> GetSkinBySkinName(string skinName);

        Task<bool> CreateContract(Contract contract);
        Task<Contract[]> GetAllContracts();

        Task<Contract> GetContractByID(int id);
    }
}
