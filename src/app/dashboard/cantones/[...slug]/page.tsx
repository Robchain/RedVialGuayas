import { getCantonId } from "@/Api/Dasboard/canton";
import { Metadata } from "next";

interface Props {
    params: { slug: string[]};
  }

  export async function generateMetadata(props: Props): Promise<Metadata> {
    try {
      const { params } = props;
      let id = parseInt(params.slug[1])
      const { nombre} =await getCantonId({id:id});
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

const { nombre, idCanton} =await getCantonId({id:parseInt(params.slug[1])});

return(<div>
{nombre} 
<br/>
{idCanton}
</div>)

}