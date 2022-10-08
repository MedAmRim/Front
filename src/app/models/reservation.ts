import { Chambre } from "./chambre";
import { Visiteur } from "./visiteur";
export interface Reservation{

    id_reservation: number;
    date_depart: Date;
    date_arrivee: Date;
    nbrAdults: number;
    nbrEnfants: number;
    destination: string;
    visiteur: Visiteur;
    chambers: Chambre[];
}