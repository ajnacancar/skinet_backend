using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class UpdateProductDto : AddProductDto
    {
        public int Id { get; set; }
    }
}