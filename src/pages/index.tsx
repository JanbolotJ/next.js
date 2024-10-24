import React, { useEffect, useState } from 'react'
import cls from "@/styles/Home.module.scss";
import Head from 'next/head';
import Socials from '../../components/Socials';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from 'next/link';

interface Socials {
  id: number,
  icon: string,
  path: string
}

interface SocialsPage {
    socials: Socials[]
}

interface NewsItem {
    id: string,
    title: string,
    excerpt: string,
    content: string
};


export const getServerSideProps: GetServerSideProps = async () => {
 try {
   const response = await fetch(`${process.env.API_HOST}/socials`);
    const data: Socials[] = await response.json();
    if(!data) {
      return {
        notFound: true,
      };
    };

    return {
      props: {socials: data},
    }
 } catch {
  return {
    props: {socials: null}
  }
 }
};

export default function Home({socials}: SocialsPage) {
  const newsList = useSelector((state: RootState) => state.news.newsList);
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;
  return (
    <>
      <Head>
        <title>Новости | Мини-портал</title>
        <meta name='description' content='Последние новости и блоги'/>
      </Head>
      <div className={cls.container}>
        <h1 className={cls.news}>Новости</h1>
        <div className={cls.grid}>
          {newsList.map((news: NewsItem) => (
            <div key={news.id} className={cls.border}>
              <h2 className={cls.title}>{news.title}</h2>
              <p className={cls.excerpt}>{news.excerpt}</p>
              <Link href={`/news/${news.id}`} className={cls.link}>
                Читать далее
              </Link>
            </div>
          ))}
        </div>
        <Socials socials={socials}/>
      </div>
    </>
  )
}








// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>My first nextjs site</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div
//         className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="https://nextjs.org/icons/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol>
//             <li>
//               Get started by editing <code>src/pages/index.tsx</code>.
//             </li>
//             <li>Save and see your changes instantly.</li>
//           </ol>

//           <div className={styles.ctas}>
//             <a
//               className={styles.primary}
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className={styles.logo}
//                 src="https://nextjs.org/icons/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondary}
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className={styles.footer}>
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="https://nextjs.org/icons/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div>
//     </>
//   );
// }
