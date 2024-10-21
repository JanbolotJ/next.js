

import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Head from 'next/head';

export default function NewsDelails() {
    const router = useRouter();
    const {id} = router.query;
    const news = useSelector((state: RootState) => state.news.newsList.find((newsItem) => newsItem.id === id));

    if(!news) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>{news.title} | Новости</title>
        <meta name='description' content={news.title}/>
      </Head>
      <div>
        <h1>{news.title}</h1>
        <p>{news.content}</p>
      </div>
    </>
  )
}
