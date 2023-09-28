import { ResultadoTramos } from '@/interface'
import React from 'react'
import { TramosIndividual } from './TramosIndividual'
interface Props{
    data:ResultadoTramos[]
}

export const TramosGrid = ({data}:Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
    {data.map(i=>(
  <TramosIndividual {...i}/>
   )
  )}
   </div>
  )
}
