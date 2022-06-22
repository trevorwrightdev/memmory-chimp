import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const MobileNavBar = () => {
  return (
    <div className='fixed bg-lime-400 top-0 flex flex-row-reverse pr-2 w-full h-16'>
        <FontAwesomeIcon icon={faNavicon} className='cursor-pointer h-full text-white'/>
    </div>
  )
}

export default MobileNavBar