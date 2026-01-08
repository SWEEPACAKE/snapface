// Moteur Angular 
import { Component, OnInit, signal } from '@angular/core';
// Modèles 
import { FaceSnapModel } from './models/face-snap-model';
// Composants Custom
import { Menu } from './menu/menu';
import { FaceSnap } from './face-snap/face-snap';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [Menu, FaceSnap, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('snapface');

  mySnap: FaceSnapModel;
  mySnap2: FaceSnapModel;
  
  ngOnInit() {
    this.mySnap = new FaceSnapModel(
      'Archibald', 
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    );
    this.mySnap2 = new FaceSnapModel(
      'Tintin', 
      'Le journaliste roux',
      new Date(),
      2,
      "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4a/Tintin_et_Milou_Logo_headshot.png/960px-Tintin_et_Milou_Logo_headshot.png"
    );
  }

}
