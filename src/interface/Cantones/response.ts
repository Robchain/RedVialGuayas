export interface ResponseCantones {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     ResultadoCantones[];
}

export interface ResultadoCantones {
    idCanton: number;
    nombre:   string;
}


// Generated by https://quicktype.io

export interface ICantonResponseByID {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     ResultadoCantones;
}

