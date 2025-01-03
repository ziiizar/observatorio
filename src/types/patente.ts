// Type definitions for your Django models

import { Fuente } from "./fuente";

  export type Patente = {
    id: string;
    abstract: string;
    description: string;
    claims: string;
    patent_office: string;
    url: string;
    sourceData?: Fuente | null;
    fuente: number
  }
  

  