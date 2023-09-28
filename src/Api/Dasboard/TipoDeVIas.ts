import { ITipoDeViaResponse } from "@/interface";
import { Api } from "..";


export const GetTipoDeVia =async () => {
    const data:ITipoDeViaResponse = await fetch(`${Api}/TipoDeVia`).then(res=>res.json());
return data.resultado;
}

