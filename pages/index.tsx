import type { NextPage } from 'next'
import GridGame from '../components/GridGame'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <GridGame />
    </div>
  )
}

export default Home
