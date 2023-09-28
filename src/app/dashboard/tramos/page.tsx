import { GetTramos } from "@/Api";
import { ButtonAdd, TramosGrid } from "@/components";

export default async function Page() {

    const data  = await GetTramos();
    return(     <div className="flex flex-col">
    <div className="flex pt-2 pr-2">
    <div className="text-3xl mx-auto text-center"> <h1 style={{fontWeight:'bold'}}>Tramos</h1> </div><ButtonAdd text={"Agregar"}/>
    </div>
<TramosGrid  data={data}/>

</div>)
}