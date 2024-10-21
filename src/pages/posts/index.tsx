

import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface Posts {
  id:number,
  title:string
};

interface ContactPageProps {
  posts:Posts[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Posts[] = await response.json();

  if(!data) {
    return {
      notFound: true,
    };
  };

  return {
    props: {posts: data},
  }
};

export default function Posts({posts}: ContactPageProps) {
  return (
    <>
      <Head>
        <title>
            Posts
        </title>
      </Head>
    <h1>Posts list:</h1>
    <ul>
        {posts && posts.map(({id, title}) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
            </li>
        ))}
    </ul>
    </>
  )
}
