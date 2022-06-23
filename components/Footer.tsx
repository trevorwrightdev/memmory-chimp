import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-20 absolute bottom-0'>
        <a className='select-none' href="https://github.com/trevorwrightdev/memory-chimp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCode} /> github
        </a>
    </div>
  )
}

export default Footer