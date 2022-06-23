import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'

const MAX_SQUARES = 35
const WAIT_TIME = 5
const START_SQUARE_COUNT = 4

interface Square {
  number: string,
  visible: boolean,
  clickable: boolean,
  onClick?: () => void,
}

const GridItem = (props: Square): JSX.Element => {
  return (
    <motion.div 
      onClick={props.onClick}
      animate={props.visible ? {opacity: 1} : {opacity: 0}} 
      transition={{duration: 0.5}}
      className={`${props.clickable ? 'pointer-events-auto' : 'pointer-events-none'} select-none grid place-items-center cursor-pointer bg-lime-600 w-full aspect-square rounded-lg`}
    >
      <motion.span 
        animate={props.clickable ? {opacity: 0} : {opacity: 1}}
        transition={{duration: 0.25}}
      >
        {props.number}
      </motion.span>
    </motion.div>
  )
}

const GridGame = (): JSX.Element => {

  const [fadeMenu, setFadeMenu] = useState<boolean>(false)
  const [removeMenu, setRemoveMenu] = useState<boolean>(false)
  const [showLossMenu, setShowLossMenu] = useState<boolean>(false)

  // Grid item data
  const getGridItems = (): Square[] => {
    const items: Square[] = []
    for (let i = 0; i < MAX_SQUARES; i++) {
      const squareItem: Square = {
        number: '',
        visible: true,
        clickable: false,
      }

      items.push(squareItem)
    }
    return items
  }
  const [gridItems, setGridItems] = useState<Square[]>(getGridItems())
  const [score, setScore] = useState<number>(0)

  const squareCount = useRef<number>(START_SQUARE_COUNT)
  const correctIndexes = useRef<number[]>([])
  const aboutToWait = useRef<boolean>(false)

  const startGame = (): void => {
    setFadeMenu(true)

    // Start level
    playLevel()

    setTimeout(() => {
      setRemoveMenu(true)

      // wait for duration of fade animation
    }, 500)
  }

  const playLevel = (): void => {
    // * Set all squares as inactive
    let newSquares: Square[] = [...gridItems]
    newSquares = newSquares.map((item) => {
      return {
        ...item,
        visible: false,
        clickable: false,
        number: '',
      }
    })

    // * Show the correct squares
    const indexes: number[] = []
    // Get the random indexes
    for (let i = 0; i < squareCount.current; i++) {
      let randomNumber
      do {
        randomNumber = Math.floor(Math.random() * (MAX_SQUARES - 0) + 0);
      } while (indexes.includes(randomNumber))
      indexes.push(randomNumber)
    }
    correctIndexes.current = indexes

    // Set correct state for the items to show
    for (let index in correctIndexes.current) {
      newSquares[indexes[index]] = {
        ...newSquares[indexes[index]],
        visible: true,
        number: (parseInt(index) + 1).toString()
      }
    }
    aboutToWait.current = true
    setGridItems(newSquares)
  }

  useEffect(() => {
    if (aboutToWait.current === false) return 

    aboutToWait.current = false
    setTimeout(() => {
      // Remove the numbers from everything 
      let newSquares: Square[] = [...gridItems]
      newSquares = newSquares.map((item) => {
        if (item.visible) {
          return {
            ...item,
            clickable: true,
          }
        } else {
          return {
            ...item,
          }
        }
      })
      setGridItems(newSquares)
    }, WAIT_TIME * 1000)

  }, [gridItems])

  const lose = (): void => {
    // bring back all squares and make them unclickable with no numbers
    let newSquares = [...gridItems]
    newSquares = newSquares.map((item) => {
      return {
        ...item,
        number: '',
        clickable: false,
        visible: true,
      }
    })
    squareCount.current = START_SQUARE_COUNT
    setGridItems(newSquares)
    setFadeMenu(false)
    setRemoveMenu(false)
    setShowLossMenu(true)
  }

  return (
    <div className='w-[350px] h-[550px] bg-lime-500 rounded-lg relative'>
      <div className='place-items-center w-full h-full p-3 gap-2 grid grid-cols-5 grid-rows-7 absolute'>
        {gridItems.map((item, idx) => {
          const click = (): void => {
            let number = parseInt(item.number)
            let correctNumber = parseInt(gridItems[correctIndexes.current[0]].number)
            if (number === correctNumber) {
              
              if (correctIndexes.current.length !== 1) {
                // Remove the first element of the correct indexes array
                correctIndexes.current.shift()
                // Make this square not clickable and not visible 
                let newSquares: Square[] = [...gridItems]
                newSquares[idx].clickable = false
                newSquares[idx].visible = false
                // I'm doing this because the number reappears due to clickable becoming false again 
                newSquares[idx].number = ''

                setGridItems(newSquares)
              } else if (correctIndexes.current.length === 1) {
                // If this is the last square, play increment the count and play next level
                squareCount.current++
                playLevel()
              }
              
            } else if (number !== correctNumber) {
              // Lose condition 
              lose()
            }
          }

          return (
            <GridItem onClick={click} key={idx} number={item.number} visible={item.visible} clickable={item.clickable}/>
          )
        })}
      </div>
      {!removeMenu && <motion.div animate={fadeMenu ? { opacity: 0 } : { opacity: 1 }} transition={{duration: 0.5}} className='gap-2 flex flex-col justify-center items-center w-full h-full bg-black/20 absolute rounded-lg'>
        {showLossMenu && 
          <div className='text-lg h-52 w-60 flex flex-col items-center bg-lime-400 rounded-lg p-1'>
            <h1>you lost</h1>
            <div className='w-full flex flex-row'> 
              <div className='w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-center'>your score:</h1>
                <h1></h1>
              </div>
              <div className='w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-center'>your best:</h1>
              </div>
            </div>
          </div>}
        <div onClick={!fadeMenu ? startGame : undefined} className='cursor-pointer text-lg bg-lime-400 p-1 rounded-lg'>tap to play</div>
      </motion.div>}
    </div>
  )
}

export default GridGame