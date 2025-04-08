import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  imports:[CommonModule,
    RouterModule
  ],
})
export class ReservationComponent {
  name: string = '';
  phone: string = '';
  date: string = '';
  message: string = '';

  submitReservation() {
    alert(`Réservation pour ${this.name} le ${this.date} enregistrée!`);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.phone = '';
    this.date = '';
    this.message = '';
  }
}
