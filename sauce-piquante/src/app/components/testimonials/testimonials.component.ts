import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent  implements OnInit {
  testimonials = [
    {
      image: 'images/Antoine.JPG',
      nom: 'Antoine Garcia',
      texte: '"Je suis tombé amoureux de ce restaurant unique en son genre".'
    },
    {
      image: 'images/Ousmane.JPG',
      nom: 'Ousmane Mballo',
      texte: '"J’ai vraiment été séduit par sauce piquante, depuis la première réservation je ne l’ai pas regretté".'
    },
    {
      image: 'images/Adama.JPG',
      nom: 'Adama Ndiaye',
      texte: '"L’originalité de leurs recettes a fait de ce restaurant mon préféré."'
    }
  ];

  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => this.next(), 5000);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }
}

