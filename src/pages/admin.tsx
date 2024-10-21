import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import {v4 as uuidv4} from 'uuid'
import { addNews, deleteNews } from '../../redux/newsSlice';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import cls from "../styles/Admin.module.scss"

export default function Admin() {
    const newsList = useSelector((state: RootState) => state.news.newsList)
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<string>('');
    const [excerpt, setExcerpt] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleAddNews = () => {
        dispatch(
            addNews({
                id: uuidv4(),
                title,
                excerpt,
                content
            })
        );
        setTitle('');
        setExcerpt('');
        setContent('');
    }

    const handleDeleteNews = (id: string) => {
        dispatch(deleteNews(id))
    }
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <div className={cls.addNews}>
        <h1 className={cls.addNew}>Добавить новость</h1>
        <div className={cls.inputs}>
            <input 
                type="text"
                placeholder='Заголовок'
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text"
                placeholder='Краткое описание'
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)} 
            />
            <textarea 
                placeholder='Контент'
                value={content}
                onChange={(e) => setContent(e.target.value)} 
            />
        </div>
        <button className={cls.addButton} onClick={handleAddNews} >
            Добавить
        </button>
      </div>
      <div className={cls.deleteNews}>
        <ul className={cls.deleteList}>
            {newsList.map((news) => (
                <li key={news.id} className={cls.deleteItem}>
                    <div>
                        <h2 className={cls.dtitle}>{news.title}</h2>
                        <p className={cls.dcontent}>{news.content}</p>
                    </div>
                    <button className={cls.deleteButton} onClick={() => handleDeleteNews(news.id)}>delete</button>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}
