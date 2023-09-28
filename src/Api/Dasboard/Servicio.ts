import { IServicioResponse } from "@/interface";
import { Api } from "..";


export const GetServicio =async () => {
    const data:IServicioResponse = await fetch(`${Api}/Servicio`).then(res=>res.json());
return data.resultado;
}

