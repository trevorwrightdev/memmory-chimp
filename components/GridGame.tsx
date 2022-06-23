import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const MAX_SQUARES = 35

interface Square {
  number: string,
  visible: boolean,
  clickable: boolean,
}

const GridItem = (props: Square): JSX.Element => {
  return (
    <motion.div animate={props.visible ? {opacity: 1} : {opacity: 0}} className={`${props.clickable ? 'pointer-events-auto' : 'pointer-events-none'} grid place-items-center cursor-pointer bg-lime-600 w-full aspect-square rounded-lg`}>
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
    for (let i = 0; i < MAX_SQUARES; i++) {
      const squareItem: Square = {
        number: (i + 1).toString(),
        visible: true,
        clickable: false,
      }

      items.push(squareItem)
    }
    return items
  }
  const gridItems = useRef<Square[]>(getGridItems())

  const squareCount = useRef<number>(4)
  const [render, setRender] = useState<boolean>(false)

  const startGame = (): void => {
    setFadeMenu(true)

    // Start level
    playLevel()

    setTimeout(() => {
      setRemoveMenu(true)

      // wait for duration of fade animation
    }, 500)
  }

  const fadeAllSquares = (): void => {
    // Set all squares as inactive
    let newSquares: Square[] = [...gridItems.current]
    newSquares = newSquares.map((item) => {
      return {
        ...item,
        visible: false,
      }
    })

    gridItems.current = newSquares
  }

  const showRandomSquares = (): void => {
    const indexes: number[] = []

    // Get the random indexes
    for (let i = 0; i < squareCount.current; i++) {
      let randomNumber
      do {
        randomNumber = Math.floor(Math.random() * (MAX_SQUARES - 0) + 0);
      } while (indexes.includes(randomNumber))
      indexes.push(randomNumber)
    }

    let newSquares: Square[] = [...gridItems.current]
    for (let index of indexes) {
      newSquares[index] = {
        ...newSquares[index],
        visible: true,
        number: index.toString()
      }
    }
    gridItems.current = newSquares
  }

  const playLevel = (): void => {
    fadeAllSquares()
    showRandomSquares()
    rerender()
  }

  const rerender = (): void => {
    setRender(!render)
  }

  return (
    <div className='w-[350px] h-[550px] bg-lime-500 rounded-lg relative'>
      <div className='place-items-center w-full h-full p-3 gap-2 grid grid-cols-5 grid-rows-7 absolute'>
        {gridItems.current.map((item, idx) => {
          return (
            <GridItem key={idx} number={item.number} visible={item.visible} clickable={item.clickable}/>
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