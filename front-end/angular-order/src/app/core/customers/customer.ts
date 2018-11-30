import { Address } from './address/address';
import { Email } from './email/email';
import { PhoneNumber } from './phoneNumber/phoneNumber';

export class Customer{
    id: string;
    firstName: string;
    lastName: string;
    address: Address;
    email: Email;
    phoneNumber: PhoneNumber;
}