import { Azienda } from "./azienda";
import { Candidatura } from "./candidatura";

export class Vacancy {
    id: number;
    azienda: Azienda;
    titolo: string;
    descrizione: string;
    settore: string;
    ruolo: string;
    budget: number;
    candidature: Candidatura;
}