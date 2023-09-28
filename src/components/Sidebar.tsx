import { SideBarMenuItems } from './SideBarMenuItems'
import {GiHorizonRoad} from 'react-icons/gi'
import {BiSolidCity} from 'react-icons/bi'
import {RiRemixiconFill} from 'react-icons/ri'
import {FaRoad} from 'react-icons/fa6'


const menuItems = [
    {
path:'/dashboard/cantones',
icon:<BiSolidCity size={40} />,
title:'Cantones',
subtitle:'Cantones de la provincia del Guayas'
    },
    {
        path:'/dashboard/carreteras',
        icon:<GiHorizonRoad size={40} />,
        title:'Carreteras',
        subtitle:'Carreteras'
            },
            {
                path:'/dashboard/tramos',
                icon:<FaRoad size={40} />,
                title:'Tramos',
                subtitle:'Tramos',
                    },
            {
                path:'/dashboard/configuraciones',
                icon:<RiRemixiconFill size={40} />,
                title:'Tipo de vias y Servicios',
                subtitle:'Configuraciones',
                    },
]


export const Sidebar = () => {
  return (
    <div id="menu"
    style={{width:'400px'}}
    className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-scroll ">
               <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Red vial Guayas</h1>
                {/* <p className="text-slate-500 text-sm">Manage your actions and activities</p> */}
               </div>
               <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        NNN
                    </span>
                    </a>
               </div>
               <div id="nav" className="w-full px-6">
                {menuItems.map(item=>(
                    <SideBarMenuItems icon={item.icon} path={item.path} subtitle={item.subtitle} title={item.title} key={item.path}/>
                ))}
               </div>
            </div>
  )
}
