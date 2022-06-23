const GridItem = () => {
  return <div className='bg-lime-600 h-full w-full rounded-lg' />
}

const GridGame = () => {

  return (
    <div className='p-3 gap-2 grid grid-cols-4 grid-rows-6 w-[350px] h-[550px] bg-lime-500 rounded-lg'>
      <GridItem />
    </div>
  )
}

export default GridGame