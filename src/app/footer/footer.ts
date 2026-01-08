import { Component, OnInit } from '@angular/core';

// Import du modèle
import { MenuItem } from '../models/menu-item-model';

// Import des composants Custom
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {

  // Création de deux tableaux vides pour contenir les liens de menu
  tableauLiens1: any = [];
  tableauLiens2: any = [];

  ngOnInit(): void {
    // Instanciation des liens de menu sur la base du modèle
    let lien1 = new MenuItem(1, "/", "Accueil");
    let lien2 = new MenuItem(2, "#", "Qui sommes-nous ?");
    let lien3 = new MenuItem(3, "#", "Top 10 des plus gros tracteurs");
    // Ajout des MenuItems créés dans le tableau 
    this.tableauLiens1.push(lien1);
    this.tableauLiens1.push(lien2);
    this.tableauLiens1.push(lien3);

        // Instanciation des liens de menu sur la base du modèle
    let lien4 = new MenuItem(4, "#", "Mentions légales");
    let lien5 = new MenuItem(5, "#", "CGV");
    // Ajout des MenuItems créés dans le tableau 
    this.tableauLiens2.push(lien4);
    this.tableauLiens2.push(lien5);
  }

}
