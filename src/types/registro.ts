import { Fuente } from "./fuente";

export type Registros = {
    id: number;
    header: { [key: string]: string };
    metadata: { [key: string]: any };
    day: number;
    month: number;
    year: number;
    source?: Fuente | null;
  }
  