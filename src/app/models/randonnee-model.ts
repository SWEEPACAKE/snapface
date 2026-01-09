export class RandonneeModel {
    id: number;
    nom: string;
    description: string;
    denivele: number;
    distance: number;
    difficulte: string;
    photoUrl: string;

    constructor(id: number, nom: string, description: string, denivele: number, distance: number, difficulte: string, photoUrl: string) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.denivele = denivele;
        this.distance = distance;
        this.difficulte = difficulte;
        this.photoUrl = photoUrl;
    }
}