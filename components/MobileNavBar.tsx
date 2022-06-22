import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const MobileNavBar = () => {
  return (
    <div className='flex flex-row-reverse pr-3 w-full h-16'>
        <FontAwesomeIcon icon={faNavicon} className='h-full text-white'/>
    </div>
  )
}

export default MobileNavBar