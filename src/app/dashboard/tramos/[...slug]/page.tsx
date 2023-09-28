import { GetTramosId } from "@/Api";
import { Metadata } from "next";

interface Props {
    params: { slug: string[]};

  }

  export async function generateMetadata(props: Props): Promise<Metadata> {
    try {
      const { params } = props;
      let id = parseInt(params.slug[1])
      const { nombre} =await GetTramosId({id:id});
      return {
        title: `${nombre}`,
        description: `Informacion de tramo ${nombre}`
      }
    } catch (error) {
      return {
        title: 'Pagina Canton',
        description: 'Pagina Canton'
      }
    }
  }
export default async function Page({params}:Props){

const { nombre, idTramo} =await GetTramosId({id:parseInt(params.slug[1])});

return(<div>
{nombre} 
<br/>
{idTramo}


</div>)

}