using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductService
    {
        Task<ProductBrand> AddProductBrand(string name);

        Task<ProductBrand> DeleteProductBrand(ProductBrand productBrand);

        Task<ProductType> AddProductType(string name);
        Task<ProductType> DeleteProductType(ProductType productType);
        Task<Product> AddNewProduct(Product product);
        Task<Product> DeleteProduct(Product product);
        Task<Product> UpdateProduct(Product product);
    }
}