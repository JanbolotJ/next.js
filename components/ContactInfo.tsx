import React from 'react';

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string
}

interface Contact {
  name: string,
  email: string,
  address: Address
}

interface ContactPageProps {
  contact: Contact
}

export default function ContactInfo({ contact }: ContactPageProps) {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <h3>Empty contact</h3>;
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
}
