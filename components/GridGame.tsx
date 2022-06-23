import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Square {
  number: string,
  active: boolean,
}

const GridItem = (props: Square): JSX.Element => {
  return (
    <motion.div animate={props.active ? {opacity: 1} : {opacity: 0}} className={`${props.active ? 'pointer-events-auto' : 'pointer-events-none'} grid place-items-center cursor-pointer bg-lime-600 w-full aspect-square rounded-lg`}>
      {props.number}
    </motion.div>
  )
}

const GridGame = (): JSX.Element => {

  const [fadeMenu, setFadeMenu] = useState<boolean>(false)
  const [removeMenu, setRemoveMenu] = useState<boolean>(false)

  // Grid item data
  const getGridItems = (): Square[] => {
    const items: Square[] = []
    for (let i = 0; i < 35; i++) {
      const squareItem: Square = {
        number: (i + 1).toString(),
        active: true,
      }

      items.push(squareItem)
    }
    return items
  }
  const [gridItems, setGridItems] = useState<Square[]>(getGridItems())

  const startGame = (): void => {
    setFadeMenu(true)

    // Set all square as inactive
    let newSquares: Square[] = [...gridItems]
    newSquares = newSquares.map((item) => {
      return {
        ...item,
        active: false,
      }
    })

    setGridItems(newSquares)

    setTimeout(() => {
      setRemoveMenu(true)

      // wait for duration of fade animation
    }, 500)
  }

  return (
    <div className='w-[350px] h-[550px] bg-lime-500 rounded-lg relative'>
      <div className='place-items-center w-full h-full p-3 gap-2 grid grid-cols-5 grid-rows-7 absolute'>
        {gridItems.map((item, idx) => {
          return (
            <GridItem key={idx} number={item.number} active={item.active}/>
          )
        })}
      </div>
      {!removeMenu && <motion.div animate={fadeMenu && { opacity: 0 }} transition={{duration: 0.5}} className='grid place-items-center w-full h-full bg-black/20 absolute rounded-lg'>
        <div onClick={!fadeMenu ? startGame : undefined} className='cursor-pointer text-lg bg-lime-400 p-1 rounded-lg'>tap to play</div>
      </motion.div>}
    </div>
  )
}

export default GridGame