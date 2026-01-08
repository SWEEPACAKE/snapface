import { Component, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  @Input() faceSnap: FaceSnapModel;

  onAddSnap() {
    this.faceSnap.snaps++;
  }
}
