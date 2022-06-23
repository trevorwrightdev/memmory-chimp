import { useState } from 'react'

interface GridProps {
  number?: number,
  active?: boolean,
}

const GridItem = (props: GridProps): JSX.Element => {
  return <div className='bg-lime-600 h-full w-full rounded-lg' />
}

const GridGame = (): JSX.Element => {

  const [gameStarted, setGameStarted] = useState<boolean>(false)

  const getGridItems = (): JSX.Element[] => {
    const items: JSX.Element[] = []
    for (let i = 0; i < 24; i++) {
      items.push(<GridItem />)
    }
    return items
  }

  return (
    <div className={`p-3 gap-2 grid grid-cols-4 grid-rows-6 w-[350px] h-[550px] bg-lime-500 rounded-lg`}>
      {getGridItems()}

    </div>
  )
}

export default GridGame