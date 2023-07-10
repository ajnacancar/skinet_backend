using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (!roleManager.Roles.Any())
            {
                var roles = new List<AppRole>{
                new AppRole{Id="test", Name = "User"},
                new AppRole{Id="test1", Name = "Admin"},
            };


                foreach (var role in roles)
                {
                    await roleManager.CreateAsync(role);
                }
            }



            // if (!userManager.Users.Any())
            // {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "bob@test.com",
                    Address = new Address
                    {
                        FirstName = "Bob",
                        LastName = "Bobbity",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90210"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "User");

                var userAdmin = new AppUser
                {
                    DisplayName = "Ajnna",
                    Email = "ajna@size.ba",
                    UserName = "ajna@size.ba",
                    Address = new Address
                    {
                        FirstName = "Bob",
                        LastName = "Bobbity",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90210"
                    }
                };

                await userManager.CreateAsync(userAdmin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(userAdmin, new[] { "Admin", "User" });
            // }
        }
    }
}