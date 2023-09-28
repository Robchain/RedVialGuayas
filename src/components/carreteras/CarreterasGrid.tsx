import { ResultadoCarretera } from "@/interface"
import { IndividualCarretera } from "./IndividualCarretera"

interface Props{
    data:ResultadoCarretera[]
}
export const CarreterasGrid = ({data}:Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
    {data.map(i=>(
   <IndividualCarretera {...i} />
   )
  )}
   </div>
  )
}
