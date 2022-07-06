import { NextPage } from "next"
import { useState } from 'react'


interface Digit {
  number: number,
}

const Digit = (props: Digit): JSX.Element => {



  return <div />
}

const Pi: NextPage = () => {

  const count = 400
  const newDigits: JSX.Element[] = []
  for (let i = 0; i < count; i++) {
    newDigits.push(<div className='w-full h-9 bg-red-500 rounded-lg' />)
  }
  const [digits, setDigits] = useState<JSX.Element[]>(newDigits)

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <h1>pi</h1>
      <div className='md:w-[750px] w-[350px] h-[550px] bg-lime-500 rounded-lg relative grid grid-cols-12 p-2 gap-1 overflow-y-auto'>
        {newDigits}
      </div>
    </div>
  )
}

export default Pi