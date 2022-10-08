import { Reservation } from "./reservation";

export interface Visiteur{

    id_visiteur: number;
    nom_visiteur: string;
    prenom_visiteur: string;
    telephone: string;
    reservations: Reservation[];
}