using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrderWithItemsAndOrderingSpecification : BaseSpecification<Order>
    {
        public OrderWithItemsAndOrderingSpecification(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrderWithItemsAndOrderingSpecification(int id, string email) : base(o => o.Id == id && o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }

         public OrderWithItemsAndOrderingSpecification(int id) : base(o => o.Id == id)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }

        public OrderWithItemsAndOrderingSpecification(SpecParams specParams) : base()
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
             ApplyPaging(specParams.PageSize * (specParams.PageIndex - 1), specParams.PageSize);
        }
    }
}