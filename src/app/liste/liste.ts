import { Component, Input } from '@angular/core';

// Modèles
import { FaceSnapModel } from '../models/face-snap-model';
//Import des composants custom
import { FaceSnap } from '../face-snap/face-snap';
@Component({
  selector: 'app-liste',
  imports: [FaceSnap],
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {
  @Input() maListe: FaceSnapModel[];
}
