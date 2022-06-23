import { useState } from 'react'

interface GridProps {
  number?: number,
  active?: boolean,
}

const GridItem = (props: GridProps): JSX.Element => {
  return <div className='cursor-pointer bg-lime-600 w-full aspect-square rounded-lg' />
}

const GridGame = (): JSX.Element => {

  const getGridItems = (): JSX.Element[] => {
    const items: JSX.Element[] = []
    for (let i = 0; i < 35; i++) {
      items.push(<GridItem key={i} />)
    }
    return items
  }

  return (
    <div className={`w-[350px] h-[550px] bg-lime-500 rounded-lg`}>
      <div className='place-items-center w-full h-full p-3 gap-2 grid grid-cols-5 grid-rows-7'>
        {getGridItems()}
      </div>
    </div>
  )
}

export default GridGame