import { Component, OnInit } from '@angular/core';

// Import du modèle
import { RandonneeModel } from '../../models/randonnee-model';

@Component({
  selector: 'app-liste-randonnee',
  imports: [],
  templateUrl: './liste-randonnee.html',
  styleUrl: './liste-randonnee.scss',
})
export class ListeRandonnee implements OnInit {

  // On prépare une propriété "maListe" et on la type de la façon suivante : un tableau contenant des objets de la classe RandonneModel. 
  maListe: RandonneeModel[] = [];

  ngOnInit(): void {
    // Ici on crée chaque randonnée dont on a besoin
    let rando1 = new RandonneeModel(1, "Grande Boucle des Dômes", "La Boucle des Dômes, un itinéraire de randonnée sur 2 ou 3 jours pour partir en balade à pied ou en vélo dans la Chaîne des Puys et découvrir les terres volcaniques qui traversent des paysages et des panoramas magnifiques.", 450, 62, "Difficile", "https://fichier0.cirkwi.com/image/photo/circuit/380x250/426371/fr/0.jpg?1765504182");
    let rando2 = new RandonneeModel(2, "Le tour du puy de Côme", "Le puy de Côme culmine à 1 252 m, il est le 2ème plus grand volcan de la Chaîne des Puys.", 300, 6, "Facile", "https://fichier0.cirkwi.com/image/photo/circuit/1300x1300/535894/fr/0.jpg?1765072346");
    let rando3 = new RandonneeModel(3, "Les roches Tuilière et Sanadoire", "Un souvenir inoubliable à la vue de ces deux pitons rocheux – les roches Tuilière et Sanadoire – qui émergent de la hêtraie du Guéry comme deux sentinelles veillant sur la vallée glaciaire de Fontsalade. Magnifiques panoramas sur la vallée glaciaire.", 420, 9, "Modéré", "https://cdn.iris-etourism.io/uploads/ot_volcan_sancy/7a0/50-13-11210034.webp");

    // Puis on les "push" dans la propriété "maListe"
    this.maListe.push(rando1, rando2, rando3);
  }

}
