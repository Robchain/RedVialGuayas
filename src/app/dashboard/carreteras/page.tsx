import { getCarretera } from "@/Api/Dasboard/carretera";
import { ButtonAdd } from "@/components";
import { CarreterasGrid } from "@/components/carreteras/CarreterasGrid";

export default async function Page(){
const data = await getCarretera();
    return (
        <div className="flex flex-col">
            <div className="flex pt-2 pr-2">
            <div className="text-3xl mx-auto text-center"> <h1 style={{fontWeight:'bold'}}>Carreteras</h1> </div><ButtonAdd text={"Agregar"}/>
            </div>
  <CarreterasGrid data={data}/>

   </div>
    )
}