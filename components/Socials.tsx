

import React from 'react'
import cls from "@/styles/Socials.module.scss"



interface Socials {
  id: number,
  icon: string,
  path: string
}

interface SocialsPage {
    socials: Socials[]
}

export default function Socials({socials}: SocialsPage) {
    if(!socials){
        return <p>netu</p>;
    }
  return (
    <>
      <ul className={cls.socials}>
        {socials && socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true"/>
            </a>
          </li>
        ))}
      </ul>
      <h3>its my socials</h3>
    </>
  )
}
