import type { NextPage } from 'next'
import GridGame from '../components/GridGame'

const Grid: NextPage = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <h1>grid</h1>
      <GridGame />
    </div>
  )
}
 
export default Grid