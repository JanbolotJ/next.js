import React from 'react'
import ContactInfo from '../../../components/ContactInfo'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Contact {
  name: string;
  email: string;
  address: Address;
}

interface ContactPageProps {
  contact: Contact;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const contact: Contact = await response.json();

  if (!contact) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact }, 
  };
};

export default function Contact({ contact }: ContactPageProps) {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
}
