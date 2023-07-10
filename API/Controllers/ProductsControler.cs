using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{

    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductsController
        (
            IGenericRepository<Product> productsRepo,
            IGenericRepository<ProductBrand> productBrandRepo,
            IGenericRepository<ProductType> productTypeRepo,
            IProductService productService,
            IMapper mapper
        )
        {
            _productTypeRepo = productTypeRepo;
            _productService = productService;
            _productBrandRepo = productBrandRepo;
            _productsRepo = productsRepo;
            _mapper = mapper;

        }

        // [Cached(600)]
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery] ProductSpecParams productParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            var countSpec = new ProductWithFiltersForCountSpecification(productParams);

            var totalItems = await _productsRepo.CountAsync(countSpec);

            var products = await _productsRepo.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItems, data));
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _productsRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [Cached(600)]
        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var productBrands = await _productBrandRepo.ListAllAsync();

            return Ok(productBrands);
        }

        [Cached(600)]
        [HttpGet("types")]
        public async Task<ActionResult<List<ProductType>>> GetProductTypes()
        {
            var productTypes = await _productTypeRepo.ListAllAsync();

            return Ok(productTypes);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("admin/brands")]
        public async Task<ActionResult<ProductBrand>> AddProductBrand(ProductBrandDto productBrandDto)
        {
            var productBrand = await _productService.AddProductBrand(productBrandDto.Name);

            if (productBrand == null) return BadRequest(new ApiResponse(400, "Problem adding product brand!"));

            return Ok(productBrand);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("admin/brands/{id}")]
        public async Task<ActionResult<ProductBrand>> DeleteProductBrand(int Id)
        {
            var productBrand = await _productBrandRepo.GetByIdAsync(Id);

            if (productBrand == null) return NotFound(new ApiResponse(404));

            var deletetedProductBrand = await _productService.DeleteProductBrand(productBrand);

            return Ok(deletetedProductBrand);
        }



        [Authorize(Roles = "Admin")]
        [HttpPost("admin/types")]
        public async Task<ActionResult<ProductType>> AddProductType(ProductTypeDto productTypeDto)
        {
            var productType = await _productService.AddProductType(productTypeDto.Name);

            if (productType == null) return BadRequest(new ApiResponse(400, "Problem adding product type!"));

            return Ok(productType);
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete("admin/types/{id}")]
        public async Task<ActionResult<ProductType>> DeleteProductType(int Id)
        {
            var productType = await _productTypeRepo.GetByIdAsync(Id);

            if (productType == null) return NotFound(new ApiResponse(404));

            var deletetedProductType = await _productService.DeleteProductType(productType);

            return Ok(productType);
        }


        [Authorize(Roles = "Admin")]
        [HttpPost("admin")]
        public async Task<ActionResult<Product>> AddNewProduct([FromForm] AddProductDto addProductDto)
        {

            string path = Path.Combine("C:/Users/acancar/Desktop/Projects/skinet_backend/API/Content/images/products", addProductDto.ImageName);

            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                addProductDto.Image.CopyTo(stream);
            }

            var product = new Product(
                addProductDto.Name,
                addProductDto.Description,
                addProductDto.Price,
               "images/products/" + addProductDto.ImageName,
                addProductDto.ProductBrand,
                addProductDto.ProductType);

            var addedProduct = await _productService.AddNewProduct(product);

            if (addedProduct == null) return NotFound(new ApiResponse(400, "Problem adding new product!"));

            return Ok(product);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("admin/{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int Id)
        {
            var product = await _productsRepo.GetByIdAsync(Id);

            string path = Path.Combine("C:/Users/acancar/Desktop/Projects/skinet_backend/API/Content/", product.PictureUrl);
            FileInfo file = new FileInfo(path);
            if (file.Exists)
            {
                file.Delete();
            }

            if (product == null) return NotFound(new ApiResponse(404));

            var deletedProduct = await _productService.DeleteProduct(product);

            return Ok(product);
        }


        [Authorize(Roles = "Admin")]
        [HttpPut("admin")]
        public async Task<ActionResult<Product>> UpdateProduct(UpdateProductDto updateProductDto)
        {
            var product = await _productsRepo.GetByIdAsync(updateProductDto.Id);

            if (product == null) return NotFound(new ApiResponse(404));

            product.Name = updateProductDto.Name;
            product.Description = updateProductDto.Description;
            product.Price = updateProductDto.Price;
            product.PictureUrl = "images/products" + updateProductDto.ImageName;
            product.ProductBrandId = updateProductDto.ProductBrand;
            product.ProductTypeId = updateProductDto.ProductType;

            var updatedProduct = await _productService.UpdateProduct(product);

            return updatedProduct;
        }
    }
}