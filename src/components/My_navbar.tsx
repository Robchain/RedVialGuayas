import React from 'react'
import Link from 'next/link'

export const MyNavbar = () => {

    const menuItems =[
        {
            path:'/inicio',
            title:'Inicio',
        },
        {
            path:'/preguntasfrecuentes',
            title:'Preguntas frecuentes',
        },
        {
            path:'/sobrenosotros',
            title:'Sobre nosotros',
        },
        {
            path:'/inicio',
            title:'Registrar carreteras',
        }
    ]
  return (
    <nav className='flex justify-evenly' style={{border:'1px solid #000', width:'700px'}}>
{menuItems.map(i=>(
    <Link href={i.path}>
        <div>
    {i.title}
    </div>
    </Link>
))}
    </nav>
  )
}
