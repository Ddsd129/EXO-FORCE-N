import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {

}
