import { Fuente } from "./fuente";

export type Registros = {
    id: number;
    header: { [key: string]: string };
    metadata: { [key: string]: string };
    day: number;
    month: number;
    year: number;
    source?: Fuente | null;
  }
  
  export type  formattedRegistros = {
    title: any;
    creators: any;
    subject: any;
    description: any;
    publisher: any;
    date: any;
    type: any;
    format: any;
    identifier: any;
    language: any;
    rights: any;
    source: any;
    relation: any;
    id: number;
}