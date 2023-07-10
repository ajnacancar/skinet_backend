namespace API.Dtos
{
    public class AddProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int ProductType { get; set; }
        public int ProductBrand { get; set; }
        public IFormFile Image { get; set; }
        public string ImageName { get; set; }

    }
}