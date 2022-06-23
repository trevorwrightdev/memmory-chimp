import NavBar from "./NavBar"
import Footer from "./Footer"
import { useState, useEffect } from "react"

export interface Props {
  children?: JSX.Element[] | JSX.Element
}

const Layout = (props: Props): JSX.Element => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = ():void => {
      const width: number = window.innerWidth

      if (width >= 768) {
        // close menu if its open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }

      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else if (mobileMenuOpen === false){
      document.body.style.overflow = 'visible'
    }
  }, [mobileMenuOpen])

  return (
    <div className='w-full min-h-[730px] relative'>
      <NavBar setMenu={setMobileMenuOpen} menuOpen={mobileMenuOpen}/>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout