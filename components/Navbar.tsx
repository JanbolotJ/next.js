

import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {pathname} = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className={cls.navbar}>
      <div className={cls.logo}>
        <h1>News</h1>
      </div>
      <div className={cls.burger} onClick={toggleMenu}>
        <div className={isOpen ? cls.lin1 : cls.line}></div>
        <div className={isOpen ? cls.lin2 : cls.line}></div>
        <div className={isOpen ? cls.lin3 : cls.line}></div>
      </div>
      <div className={isOpen ? cls.navActive : cls.navLinks}>
        {navigation.map(({id, title, path}) => (
            <Link key={id} href={path} className={pathname === path ? cls.active : undefined}>
              {title}
            </Link>
        ))}
      </div>
    </nav>
  )
}
