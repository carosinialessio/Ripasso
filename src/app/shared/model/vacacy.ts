import { Azienda } from "./azienda";

export class Vacancy {
    id: number;
    azienda: Azienda;
    titolo: string;
    descrizione: string;
    settore: string;
    ruolo: string;
    budget: number;
}