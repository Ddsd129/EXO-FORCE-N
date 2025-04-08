import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
