import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    {path: 'galerie', component: GalerieComponent},
    { path: 'reservation', component: ReservationComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    {path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '' }
];


