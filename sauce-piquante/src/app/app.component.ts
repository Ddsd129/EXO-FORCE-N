import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { AfterViewInit } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component'; 
import { ContactComponent } from './components/contact/contact.component';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:
  [
  RouterModule,CommonModule,

  ],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Sauce Piquante';
}


