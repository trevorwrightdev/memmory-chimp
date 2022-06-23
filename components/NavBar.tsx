import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const NavBar = (): JSX.Element => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = ():void => {
    console.log('clicking')
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className='select-none fixed top-0 z-10 w-full'>
        <div 
          className='bg-lime-400 flex flex-row-reverse justify-center items-center p-4 w-full h-20'
        >
            <FontAwesomeIcon onClick={toggleMenu} icon={faNavicon} className='cursor-pointer w-[45px] h-full'/>
            <h1 className='grow text-center text-[24px] underline'>memory chimp</h1>
            <div className='w-[45px] h-full'/>
        </div>
        <motion.div
          animate={menuOpen ? { height: 'calc(100vh - 5rem)' } : { height: '0vh' }} 
          transition={{duration: 0.25}}
          className='bg-lime-400'
        >

        </motion.div>
      </div>
      <div className='h-20'/>
    </>
  )
}

export default NavBar