import { GetCanton } from "@/Api/Dasboard/inicio"
import { CantonesGrid } from "@/components/CantonesGrid";


export default async function Page(){

   const data =await GetCanton();
     
    return(
   <div className="flex flex-col">
   <div className="text-3xl mx-auto text-center"> <h1 style={{fontWeight:'bold'}}>Cantones</h1></div>
  <CantonesGrid data={data}/>
   </div>
    )
}