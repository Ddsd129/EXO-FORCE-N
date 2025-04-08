import { NgModule } from '@angular/core';

import { AfterViewInit } from '@angular/core';
import{ CommonModule } from '@angular/common';  // Importer CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Pour les formulaires
import { HttpClientModule } from '@angular/common/http';  // Pour les requêtes HTTP

// Importation des composants
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component'; 
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
declarations: [

    
    ],
imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    HomeComponent,
    MenuComponent,
    GalerieComponent,
    ReservationComponent,
    TestimonialsComponent,
    ContactComponent,
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'menu', component: MenuComponent },
        {path: 'galerie', component: GalerieComponent},
        { path: 'reservation', component: ReservationComponent },
        { path: 'testimonials', component: TestimonialsComponent },
        {path: 'contact', component: ContactComponent},
    ])


],
providers: [AppComponent],
bootstrap: []
})
export class AppModule { }
