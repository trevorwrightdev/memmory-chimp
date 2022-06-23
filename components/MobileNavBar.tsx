import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const MobileNavBar = (): JSX.Element => {
  return (
    <>
        <div className='select-none fixed bg-lime-400 top-0 flex flex-row-reverse p-4 w-full h-20'>
            <FontAwesomeIcon icon={faNavicon} className='cursor-pointer h-full'/>
        </div>
        <div className='h-20'/>
    </>
  )
}

export default MobileNavBar