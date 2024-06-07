import React from 'react'
import Header from '../shared/header.jsx'
import Footer from '../shared/footer.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
