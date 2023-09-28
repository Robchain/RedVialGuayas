import { ResultadoCarretera } from '@/interface'
import Link from 'next/link'
import React from 'react'



export const IndividualCarretera = ({nombre, idCarretera}:ResultadoCarretera) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
    <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
    <div className="text-center flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
       <>Imagen aqui</><br/>
    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{nombre}</p>
    <div className="mt-5">
                   <Link
                   //href={`/dashboard/pokemon/${id}?test=3`}
                   href={`/dashboard/carreteras/${nombre}/${idCarretera}`}
                       className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                   >
                       Mas información
                   </Link>
               </div>
    </div>
    </div>
   </div>
  )
}
