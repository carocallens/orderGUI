﻿using Order_api.Controllers.Customers.Addresses;
using Order_api.Controllers.Customers.Emails;
using Order_api.Controllers.Customers.PhoneNumbers;
using Order_domain.Customers;
using Order_infrastructure.dto;
using System;

namespace Order_api.Controllers.Customers
{
    public class CustomerMapper : Mapper<CustomerDto, Customer>
    {
        private readonly AddressMapper _addressMapper;
        private readonly EmailMapper _emailMapper;
        private readonly PhoneNumberMapper _phoneNumberMapper;

        public CustomerMapper(AddressMapper addressMapper, EmailMapper emailMapper, PhoneNumberMapper phoneNumberMapper)
        {
            _addressMapper = addressMapper;
            _emailMapper = emailMapper;
            _phoneNumberMapper = phoneNumberMapper;
        }

        public override CustomerDto ToDto(Customer customer)
        {
            return CustomerDtoBuilder.CustomerDto()
                .WithId(customer.Id)
                .WithFirstname(customer.FirstName)
                .WithLastname(customer.LastName)
                .WithAddress(_addressMapper.ToDto(customer.Address))
                .WithEmail(_emailMapper.ToDto(customer.Email))
                .WithPhoneNumber(_phoneNumberMapper.ToDto(customer.PhoneNumber))
                .Build();
        }

        public override Customer ToDomain(CustomerDto customerDto)
        {
            return Customer.CustomerBuilder.Customer()
                .WithId(Guid.Empty)
                .WithLastname(customerDto.LastName)
                .WithFirstname(customerDto.FirstName)
                .WithAddress(_addressMapper.ToDomain(customerDto.Address))
                .WithEmail(_emailMapper.ToDomain(customerDto.Email))
                .WithPhoneNumber(_phoneNumberMapper.ToDomain(customerDto.PhoneNumber))
                .Build();
        }

        public Customer ToDomainForUpdate(Guid customerId, CustomerDto customerDto)
        {
            if (customerId != new Guid(customerDto.Id))
            {
                throw new ArgumentException(
                    "When updating a customer, the provided ID in the path should match the ID in the body: " +
                    "ID in path = " + customerId.ToString("N") + ", ID in body = " + customerDto.Id);
            }
            return ToDomainForUpdate(customerDto);
        }

        private Customer ToDomainForUpdate(CustomerDto customerDto)
        {
            return Customer.CustomerBuilder.Customer()
            .WithId(new Guid(customerDto.Id))
            .WithLastname(customerDto.LastName)
            .WithFirstname(customerDto.FirstName)
            .WithAddress(_addressMapper.ToDomain(customerDto.Address))
            .WithEmail(_emailMapper.ToDomain(customerDto.Email))
            .WithPhoneNumber(_phoneNumberMapper.ToDomain(customerDto.PhoneNumber))
            .Build();
        }
    }
}