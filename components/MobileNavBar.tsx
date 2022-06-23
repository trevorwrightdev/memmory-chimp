import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const MobileNavBar = (): JSX.Element => {
  return (
    <>
        <div className='select-none fixed bg-lime-400 top-0 flex flex-row-reverse justify-center items-center p-4 w-full h-20 z-10'>
            <FontAwesomeIcon icon={faNavicon} className='cursor-pointer w-[45px] h-full'/>
            <h1 className='grow text-center text-[24px] underline'>memory chimp</h1>
            <div className='w-[45px] h-full'/>
        </div>
        <div className='h-20'/>
    </>
  )
}

export default MobileNavBar