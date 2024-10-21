

import React from 'react'



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
        return null;
    }
  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head> */}
      <ul>
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
