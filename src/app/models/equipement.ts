import { Hotel } from "./hotel";

export interface Equipement{

    id_equipement: number;
    nom_equipement: string;
    description_equipemnt: string;
    hotels: Hotel[];
}