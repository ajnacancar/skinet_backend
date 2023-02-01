using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string RetriveEmailFromPrinciple(this ClaimsPrincipal user)
        {   
            return user.FindFirstValue(ClaimTypes.Email);
            // return user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
        }
    }
}