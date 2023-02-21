namespace Core.Entities
{
    public class ProductBrand : BaseEntity
    {
        public ProductBrand()
        {
        }

        public ProductBrand(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}