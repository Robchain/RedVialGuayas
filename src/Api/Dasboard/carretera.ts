import { IResponseCarretera, IIDResponseCarretera } from "@/interface";
import { Api } from "./inicio";

export interface input{
    id:number
}

export const getCarreteraId=async ({id}:input) => {
    const data:IIDResponseCarretera = await fetch(`${Api}/Carretera/${id}`).then(res=>res.json());
    return data.resultado;
}

export const getCarretera=async () => {
    const data:IResponseCarretera = await fetch(`${Api}/Carretera`).then(res=>res.json());
    return data.resultado;
}
