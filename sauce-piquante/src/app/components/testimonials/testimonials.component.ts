import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Antoine Garcia',
      image: 'image/Antoine.JPG',
      text: "Je suis tombé amoureux de ce restaurant unique en son genre.",
    },
    {
      name: 'Ousmane Mballo',
      image: 'image/Ousmane.JPG',
      text: "J’ai vraiment été séduit par sauce piquante.",
    },
    {
      name: 'Adama Ndiaye',
      image: 'image/Adama.JPG',
      text: "L’originalité de leurs recettes a fait de ce restaurant mon préféré.",
    },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }
}
