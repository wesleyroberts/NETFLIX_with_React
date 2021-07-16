import React from 'react'
import './Header.css'

export default function Header({black}) {
    return (
           <header className={black?'black':''}>
            <div className="header--logo">            
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-2-1.png"></img>
                </a>           
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="user"/>
                </a>
            </div>
            </header>
    )
}
