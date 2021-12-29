import React, { useEffect, useRef } from 'react'
import './Header.css'
import Arrow from '../../images/right-arrow.svg'

const Header = () => {

    // const headerRef = useRef(null)

    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => {
    //         if (window.scrollY > 10) {
    //             headerRef.current.classList.add('header-dark')
    //         }
    //         else {
    //             headerRef.current.classList.remove('header-dark')
    //         }
    //     })

    //     return (() => {
    //         window.removeEventListener('scroll');
    //     })

    // }, [])

    return (
        <header className='Header fade'>
            <div className='Header__logo-box'>
                <h1>
                    statu-esque.
                </h1>
                <div className='Header__link-box'>
                    <a className='link-arrow' href='/blog'><p >blog </p> </a>
                </div>
            </div>
            <div className='Header__kez'>
                by <a rel='noreferrer' target={'_blank'} href='https://github.com/Kezanwar'>kez anwar</a>

            </div>
        </header>
    )
}

export default Header

    // < div className = 'Header__link-box' >
    //     <ul>
    //         <li>
    //             blog
    //         </li>
    //         <li>
    //             about
    //         </li>
    //         <li>
    //             contact
    //         </li>

    //     </ul>

    //         </div >