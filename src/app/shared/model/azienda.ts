import { Settore } from "./settore";

export class Azienda{
    id: number;
    nome: string;
    descrizione: string;
    settore: Settore;
    numeroDipendenti: number;
}