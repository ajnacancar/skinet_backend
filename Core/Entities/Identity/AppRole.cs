using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities
{
    public class AppRole : IdentityRole<string>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}