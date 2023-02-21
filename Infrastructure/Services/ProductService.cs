using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Services
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Product> AddNewProduct(Product product)
        {
            _unitOfWork.Repository<Product>().Add(product);

            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return product;
        }

        public async Task<ProductBrand> AddProductBrand(string name)
        {
            var productBrand = new ProductBrand(name);
            _unitOfWork.Repository<ProductBrand>().Add(productBrand);

            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return productBrand;
        }

        public async Task<ProductType> AddProductType(string name)
        {
            var productType = new ProductType(name);
            _unitOfWork.Repository<ProductType>().Add(productType);

            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return productType;
        }

        public async Task<Product> DeleteProduct(Product product)
        {
            _unitOfWork.Repository<Product>().Delete(product);
            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return product;
        }

        public async Task<ProductBrand> DeleteProductBrand(ProductBrand productBrand)
        {
            _unitOfWork.Repository<ProductBrand>().Delete(productBrand);

            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return productBrand;
        }

        public async Task<ProductType> DeleteProductType(ProductType productType)
        {
            _unitOfWork.Repository<ProductType>().Delete(productType);

            var result = await _unitOfWork.Complete();

            if (result <= 0) return null;

            return productType;
        }

        public async Task<Product> UpdateProduct(Product product)
        {
           _unitOfWork.Repository<Product>().Update(product);

           var result = await _unitOfWork.Complete();

           if(result <= 0) return null;

           return product;
        }
    }
}