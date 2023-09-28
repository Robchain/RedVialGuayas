import { ResponseCantones } from "@/interface/Cantones/response";

export const Api = 'http://192.168.1.30:5108/api'

export const GetCanton =async () => {
    const data:ResponseCantones = await fetch(`${Api}/Canton`).then(res=>res.json());
    
return data.resultado;
}