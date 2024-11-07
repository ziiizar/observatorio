import { Fuente } from "./fuente";

export type Registros = {
    id: number;
    header: { [key: string]: string };
    metadata:  string ;
    day: number;
    month: number;
    year: number;
    source?: Fuente | null;
  }
  
  export type  formattedRegistros = {
    title: string;
    creators: string;
    subject: string;
    description: string;
    publisher: string;
    date: string;
    type: string;
    format: string;
    identifier: string;
    language: string;
    rights: string;
    source: string;
    relation: string;
    id: number;
}