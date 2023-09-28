export interface IResponseCarretera {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     ResultadoCarretera[];
}

export interface ResultadoCarretera {
    idCarretera: number;
    idCanton:    number;
    nombre:      string;
    latitud:     number;
    longitud:    number;
    estado:      string;
    idTipoVia:   number;
}


export interface IIDResponseCarretera {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     ResultadoCarretera;
}