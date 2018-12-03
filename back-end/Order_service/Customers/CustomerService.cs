using System;
using System.Collections.Generic;
using System.Linq;
using Order_domain;
using Order_domain.Customers;

namespace Order_service.Customers
{
    public class CustomerService : ICustomerService
    {
        private readonly IRepository<Customer> _customerRepository;
        private readonly CustomerValidator _customerValidator;
        
        public CustomerService(IRepository<Customer> customerRepository, CustomerValidator customerValidator)
        {
            _customerRepository = customerRepository;
            _customerValidator = customerValidator;
        }

        public Customer CreateCustomer(Customer customer)
        {
            if (!_customerValidator.IsValidForCreation(customer))
            {
                _customerValidator.ThrowInvalidOperationException(customer, "creation");
            }
            return _customerRepository.Save(customer);
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return _customerRepository.GetAll();
        }

        public Customer GetCustomer(Guid id)
        {
            return _customerRepository.Get(id);
        }

        public Customer UpdateCustomer(Customer customer)
        {
            if (!_customerValidator.IsValidForUpdating(customer))
            {
                _customerValidator.ThrowInvalidOperationException(customer, "updating");
            }
            MapUpdatedValuesToPersistedCustomer(customer);
            return _customerRepository.Update(customer);
        }

        private void MapUpdatedValuesToPersistedCustomer(Customer customer)
        {
            var persistedEntity = _customerRepository.Get(customer.Id);
            persistedEntity.FirstName = customer.FirstName;
            persistedEntity.LastName = customer.LastName;
            persistedEntity.Email = customer.Email;
            persistedEntity.Address = customer.Address;
            persistedEntity.PhoneNumber = customer.PhoneNumber;
        }
    }
}
