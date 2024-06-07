import React, { useState, useRef, useEffect } from 'react'
import NavList from './navList'
import SocialList from './socialList'
import Logo from './logo'

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navRef = useRef(null)
  const closeBtnRef = useRef(null)

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target) && !closeBtnRef.current.contains(event.target)) {
        setNavbarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navRef])
  return (
    <>
      <nav
        ref={navRef}
        className={`${
          navbarOpen ? 'nav-drop' : null
        } absolute w-full top-[52px] text-white text-center overflow-hidden transition-[height] duration-500 flex justify-center items-center text-sm notify dark:text-gray-200 dark:bg-gray-900`}
        id="notif"
      >
        <div className="container col nav-list">
          <NavList />
        </div>
      </nav>

      <header className="flex flex-row items-center justify-center px-[20px] py-[8px] w-full bg-[#1e1e1e] dark:bg-gray-900 h-[80px]">
        <div className="w-full relative items-center justify-between flex flex-row h-full max-w-[1040px]">
          <Logo />
          <div
            ref={closeBtnRef}
            onClick={toggleNavbar}
            className={`${navbarOpen ? 'navclose' : null} navopen m-nav`}
            id="nav"
          >
            <span></span>
          </div>
          <nav className="hidden md:flex flex-row justify-center items-center text-white p-0 h-[40px] md:w-auto w-[40px] gap-6">
            <div className="w-full h-auto relative flex flex-row items-center gap-4 text-[16px]">
              <NavList />
            </div>
            <div className="h-full flex flex-row justify-center items-center gap-4 w-auto bg-transparent order-2 z-[1]">
              <SocialList />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
