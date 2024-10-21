import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import {v4 as uuidv4} from 'uuid'
import { addNews, deleteNews } from '../../redux/newsSlice';
import Head from 'next/head';
import { useSelector } from 'react-redux';

export default function Admin() {
    const newsList = useSelector((state: RootState) => state.news.newsList)
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

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
      <div>
        <h1>Добавить новость</h1>
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
        <button onClick={handleAddNews} >
            dobavit
        </button>
      </div>
      <div>
        <ul>
            {newsList.map((news) => (
                <li key={news.id}>
                    <div>
                        <h2>{news.title}</h2>
                        <p>{news.content}</p>
                    </div>
                    <button onClick={() => handleDeleteNews(news.id)}>delete</button>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}
