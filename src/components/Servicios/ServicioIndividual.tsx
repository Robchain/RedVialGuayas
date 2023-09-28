import { ResultadoServicio } from '@/interface'
import React from 'react'

export const ServicioIndividual = ({idUbicacion, tipoServicios}:ResultadoServicio) => {
  return (
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">ID</span>{idUbicacion}</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Tipo de servicio</span>{tipoServicios}</td>
    {/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td> */}
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Editar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Desactivar</button>
    </td>
</tr>
  )
}
