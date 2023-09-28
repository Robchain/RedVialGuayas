import { ICantonResponseByID } from "@/interface/Cantones/response";
import { Api } from "./inicio";

interface input{
    id:number
}

export const getCantonId=async ({id}:input) => {
    const data:ICantonResponseByID = await fetch(`${Api}/Canton/${id}`).then(res=>res.json());
    return data.resultado;
}