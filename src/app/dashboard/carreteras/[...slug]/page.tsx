import { getCarreteraId } from "@/Api";
import { Metadata } from "next";

interface Props {
    params: { slug: string[]};

  }

  export async function generateMetadata(props: Props): Promise<Metadata> {
    try {
      const { params } = props;
      let id = parseInt(params.slug[1])
      const { nombre} =await getCarreteraId({id:id});
      return {
        title: `${nombre}`,
        description: `Informacion del Caton ${nombre}`
      }
    } catch (error) {
      return {
        title: 'Pagina Canton',
        description: 'Pagina Canton'
      }
    }
  }
export default async function Page({params}:Props){

const { nombre, idCarretera} =await getCarreteraId({id:parseInt(params.slug[1])});

return(<div>
{nombre} 
<br/>
{idCarretera}


</div>)

}