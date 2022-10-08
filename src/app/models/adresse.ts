import { Hotel } from "./hotel";

export interface Adresse{
    id_adresse: number;
    region: string;
    ville: string;
	cartier: string;
    hotel: Hotel;
}