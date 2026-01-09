import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FaceSnapModel } from '../../models/face-snap-model';
@Component({
  selector: 'app-face-snap',
  imports: [DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  @Input() faceSnap: FaceSnapModel;

  onAddSnap() {
    this.faceSnap.snaps++;
  }
}
