// Moteur Angular 
import { Component, OnInit, signal } from '@angular/core';
// Modèles 
import { FaceSnapModel } from './models/face-snap-model';
// Composants Custom
import { Menu } from './components/menu/menu';
import { Liste } from './components/liste/liste';
import { ListeRandonnee } from './components/liste-randonnee/liste-randonnee';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [Menu, Liste, ListeRandonnee, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('snapface');
  listeFaceSnaps: FaceSnapModel[] = [];
  
  ngOnInit() {
    let snap1 = new FaceSnapModel(
      'Archibald', 
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    );
    let snap2 = new FaceSnapModel(
      'Tintin', 
      'Le journaliste roux',
      new Date(),
      2,
      "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4a/Tintin_et_Milou_Logo_headshot.png/960px-Tintin_et_Milou_Logo_headshot.png"
    );
    this.listeFaceSnaps.push(snap1, snap2);
  }
}
