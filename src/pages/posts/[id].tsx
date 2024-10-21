

import Head from 'next/head'
import React from 'react'
import PostInfo from '../../../components/PostInfo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Post {
  id: number
};

interface Contact {
  title: string,
  body: string,
}

interface ContactPageProps {
  post: Contact
}
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await response.json();

  const paths = data.map(({id}) => ({
    params: {id: id.toString()}
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params as Params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if(!data) {
    return {
      notFound: true,
    };
  };

  return {
    props: {post: data},
  }
};

export default function Post({post}: ContactPageProps) {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PostInfo post={post}/>
    </>
  )
}
