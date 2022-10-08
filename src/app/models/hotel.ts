import { Adresse } from "./adresse";
import { Chambre } from "./chambre";
import { Equipement } from "./equipement";

export class Hotel{

    id_hotel!: number;
    nom!: string;
    description!: string;
    adresse!: Adresse;
    chambers!: Chambre[];
    equipements!: Equipement[];
    pic!: string;
}