

import React from 'react';
import cls from "@/styles/Navbar.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/router';
const navigation = [
    {id:1, title: 'Home', path: '/'},
    {id:2, title: 'Posts', path: '/posts'},
    {id:3, title: 'Contacts', path: '/contacts'},
    {id:4, title: 'Admin', path: '/admin'}
]
export default function Navbar() {
  const {pathname} = useRouter();
  return (
    <nav className={cls.navbar}>
      <div className={cls.logo}>
        <h1>News</h1>
      </div>
      <div className={cls.links}>
        {navigation.map(({id, title, path}) => (
            <Link key={id} href={path} className={pathname === path ? cls.active : undefined}>
              {title}
            </Link>
        ))}
      </div>
    </nav>
  )
}
