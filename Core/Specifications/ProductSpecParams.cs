using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductSpecParams : SpecParams
    {
        public int? BrandId { get; set; }
        public int? TypeId { get; set; }
        public string sort { get; set; }
        private string _search;

        public string Search
        {
            get => _search;
            set => _search = value.ToLower();
        }

    }
}