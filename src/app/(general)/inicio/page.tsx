import { Login } from '@/components/Login'
import Image from 'next/image'
import React from 'react'
import Guayas  from '../../../../public/images/Cantones_del_Guayas.jpg'

export default function Page(){
  return (
    <div className='mt-10 flex justify-between' >
    <Image alt='Mapa cantonal del Guayas' src={Guayas} className='w-96'/>
    <Login/>
  </div>
  )
}
