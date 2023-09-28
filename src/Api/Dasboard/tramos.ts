import { IResponseTramoIndiviual, ITramosResponse } from "@/interface";
import { Api } from "..";
import { input } from "./carretera";


export const GetTramos =async () => {
    const data:ITramosResponse = await fetch(`${Api}/Tramo`).then(res=>res.json());
return data.resultado;
}


export const GetTramosId =async ({id}:input) => {
    const data:IResponseTramoIndiviual = await fetch(`${Api}/Tramo/${id}`).then(res=>res.json());
return data.resultado;
}
