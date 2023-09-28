import React from 'react'
import { InvidualProvincia } from '.'
import { ResultadoCantones } from '@/interface/Cantones/response'

interface Props{
    data:ResultadoCantones[]
}

export const CantonesGrid = ({data}:Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
     {data.map(i=>(
    <InvidualProvincia nombre={i.nombre} key={i.idCanton}  id={i.idCanton}/>  
    )
   )}
    </div>
  )
}  
