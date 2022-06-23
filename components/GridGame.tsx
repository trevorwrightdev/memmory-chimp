import { useState } from 'react'
import { motion } from 'framer-motion'

interface GridProps {
  number?: number,
  active?: boolean,
}

const GridItem = (props: GridProps): JSX.Element => {
  return (
    <div className='grid place-items-center cursor-pointer bg-lime-600 w-full aspect-square rounded-lg'>
      {props.number}
    </div>
  )
}

const GridGame = (): JSX.Element => {

  const [fadeMenu, setFadeMenu] = useState<boolean>(false)
  const [removeMenu, setRemoveMenu] = useState<boolean>(false)

  const getGridItems = (): JSX.Element[] => {
    const items: JSX.Element[] = []
    for (let i = 0; i < 35; i++) {
      items.push(<GridItem key={i}/>)
    }
    return items
  }

  const startGame = (): void => {
    console.log('running!')
    setFadeMenu(true)

    setTimeout(() => {
      setRemoveMenu(true)
    }, 500)
  }

  return (
    <div className='w-[350px] h-[550px] bg-lime-500 rounded-lg relative'>
      <div className='place-items-center w-full h-full p-3 gap-2 grid grid-cols-5 grid-rows-7 absolute'>
        {getGridItems()}
      </div>
      {!removeMenu && <motion.div animate={fadeMenu && { opacity: 0 }} transition={{duration: 0.5}} className='grid place-items-center w-full h-full bg-black/20 absolute rounded-lg'>
        <div onClick={!fadeMenu ? startGame : undefined} className='cursor-pointer text-lg bg-lime-400 p-1 rounded-lg'>tap to play</div>
      </motion.div>}
    </div>
  )
}

export default GridGame