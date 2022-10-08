import { Hotel } from "./hotel";
import { Reservation } from "./reservation";
export interface Chambre{

    id_chambre: number;
    nbr_lit: Number;
    capacity: number;
    prix: number;
    typeChamber: string;
    numChamber: number;
}