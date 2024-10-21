

import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Head from 'next/head';
import cls from "../../styles/Home.module.scss"

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
      <div className={cls.container}>
        <div className={cls.grid}>
          <div className={cls.border}>
            <h1 className={cls.title}>{news.title}</h1>
            <p className={cls.excerpt}>{news.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}
