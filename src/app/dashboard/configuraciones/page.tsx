import { GetTipoDeVia } from "@/Api";
import { GetServicio } from "@/Api/Dasboard/Servicio";
import { ServicioListado, TiposDeViasList } from "@/components";

export default async function Page() {

    const data = await  GetTipoDeVia();
    const dataDos= await GetServicio();
    
    return(  <div className="flex flex-col">
    <div className="text-3xl mx-auto text-center"> <h1 style={{fontWeight:'bold'}}>Configuraciones</h1> </div>
    <TiposDeViasList data={data}/> 
    <ServicioListado data={dataDos}/>
</div>)
}