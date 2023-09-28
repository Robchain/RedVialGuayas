import React from 'react'
import { TipoDeViasIndividual } from './TipoDeViasIndividual'
import { ResultadoBase } from '@/interface'

interface Props{
    data:ResultadoBase[]
}

export const TiposDeViasList = ({data}:Props) => {
    
  return (<div className='px-2'>
    <div>
        <h1 className='font-bold text-xl' >Tipo de vías</h1>
    </div>
    <table className="min-w-full border-collapse block md:table">
    <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Tipo de via</th>
            {/* <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th> */}
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th>
        </tr>
    </thead>
    <tbody className="block md:table-row-group">
{
    data.map(i=>(
        <TipoDeViasIndividual {...i} />
    ))
    
}			
    </tbody>
</table>
</div>
  )
}
