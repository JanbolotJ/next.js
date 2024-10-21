

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';


interface Contact {
  id:string,
  name: string,
  email: string
};

interface ContactPageProps {
  contacts:[Contact]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Contact[] = await response.json();

  if(!data) {
    return {
      notFound: true,
    };
  };

  return {
    props: {contacts: data},
  }
};

export default function Contacts({contacts}: ContactPageProps) {
  

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div>
        <h3>this is contacts</h3>
        <ul>
          {contacts && contacts.map (({id, name}) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
