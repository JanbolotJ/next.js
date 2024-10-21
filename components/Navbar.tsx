

import React from 'react';
import cls from "@/styles/Navbar.module.scss";
import Link from 'next/link';
const navigation = [
    {id:1, title: 'Home', path: '/'},
    {id:2, title: 'Posts', path: '/posts'},
    {id:3, title: 'Contacts', path: '/contacts'}
]
export default function Navbar() {
  return (
    <nav className={cls.nav}>
      <div className={cls.logo}>
        webDev
      </div>
      <div className={cls.links}>
        {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>{title}</Link>
        ))}
      </div>
    </nav>
  )
}
