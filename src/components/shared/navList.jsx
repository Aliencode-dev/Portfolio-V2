import { NavLink, useMatch, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const navLinkList = [
  { name: 'Home', route: '/' },
  { name: 'Projects', route: '/projects' },
  { name: 'About', route: '/about' }
]

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function NavList() {
  return (
    <>
      <ScrollToTop />
      {navLinkList.map((nav, index) => (
        <NavLink
          key={index}
          to={nav.route}
          className={`${useMatch(nav.route) ? 'text-[#696868] font-bold ' : ''}hover:text-[#696868] hover:scale-[1.05]`}
        >
          {nav.name}
        </NavLink>
      ))}
      <a
        className="hover:text-[#696868] hover:scale-[1.05]"
        href="mailto:chidiebereokpechi@gmail.com?subject=Inquiry%&body=Dear%20Chidiebere,%0D%0A%0D%0AHow%20are%20you%3F%20I%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20name]"
      >
        Contact
      </a>
    </>
  )
}

export default NavList
