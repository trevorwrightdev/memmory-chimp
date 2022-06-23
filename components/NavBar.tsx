import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { faBorderAll } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"

export interface Props {
  setMenu: (val: boolean) => void
  menuOpen: boolean
}

const NavBar = (props: Props): JSX.Element => {
  const router = useRouter()

  const redirect = (path: string): void => {
    props.setMenu(false)

    router.push('/' + path)
  }

  return (
    <>
      <div className='select-none fixed top-0 z-10 w-full'>
        <div 
          className='bg-lime-400 flex flex-row-reverse md:flex-row md:justify-start justify-center items-center p-4 w-full h-20 md:gap-7'
        >
            <FontAwesomeIcon onClick={() => props.setMenu(!props.menuOpen)} icon={faNavicon} className='cursor-pointer w-[45px] h-full md:hidden'/>
            <h1 className='grow md:grow-0 md:mr-5 text-center text-[24px] underline'>memory chimp</h1>
            <div onClick={() => router.push('/grid')} className='cursor-pointer hidden md:flex flex-col justify-center items-center'>
              <FontAwesomeIcon icon={faBorderAll} className='text-[24px]'/>
              <h1>grid</h1>
            </div>
            <div onClick={() => router.push('/pi')} className='cursor-pointer hidden md:flex flex-col justify-center items-center'>
              <FontAwesomeIcon icon={faCircle} className='text-[24px]'/>
              <h1>pi</h1>
            </div>
            <div className='w-[45px] h-full md:hidden'/>
        </div>
        <motion.div
          animate={props.menuOpen ? { height: 'calc(100vh - 5rem)' } : { height: '0px' }} 
          transition={{duration: 0.25}}
          className='bg-lime-400 w-full grid grid-cols-3 grid-rows-3'
        >
          {props.menuOpen && <>
            <div onClick={() => redirect('grid')} className='flex flex-col justify-center items-center'>
              <div className='bg-lime-600 w-24 rounded-lg aspect-square grid place-items-center cursor-pointer'>
                <FontAwesomeIcon className='text-[32px]' icon={faBorderAll} />
              </div>
              <h1>grid</h1>
            </div>
            <div onClick={() => redirect('pi')} className='flex flex-col justify-center items-center cursor-pointer'>
              <div className='bg-lime-600 w-24 rounded-lg aspect-square grid place-items-center'>
                <FontAwesomeIcon className='text-[32px]' icon={faCircle} />
              </div>
              <h1>pi</h1>
            </div>
          </>}
        </motion.div>
      </div>
      <div className='h-20'/>
    </>
  )
}

export default NavBar