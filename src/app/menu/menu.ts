import { Component, OnInit } from '@angular/core';
// Import du modèle de MenuItem
import { MenuItem } from '../models/menu-item-model';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {

  // Préparation d'un tableau de liens, vide pour l'instant
  tableauLiens: any = [];

  // Utilisation de ngOnInit grâce à l'implémentation de OnInit
  // ngOnInit est une fonction qui se lance 
  // dès que le composant est créé par Angular
  ngOnInit(): void {
    // Instanciation des liens de menu sur la base du modèle
    let lien1 = new MenuItem(1, "/", "Accueil");
    let lien2 = new MenuItem(2, "#", "Qui sommes-nous ?");
    let lien3 = new MenuItem(3, "#", "Top 10 des plus gros tracteurs");
    // Ajout des MenuItems créés dans le tableau 
    this.tableauLiens.push(lien1);
    this.tableauLiens.push(lien2);
    this.tableauLiens.push(lien3);
  }

}
