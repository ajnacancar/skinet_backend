namespace Core.Entities
{
    public class ProductType : BaseEntity
    {
        public ProductType()
        {
        }

        public ProductType(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}