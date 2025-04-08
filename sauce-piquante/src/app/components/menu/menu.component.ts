import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { RouterModule } from '@angular/router';


interface MenuItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule,
    RouterModule
  ] , // Ajouter CommonModule ici
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { name: 'Pizza Margherita', price: 8.99, image: 'assets/images/pizza.jpg' },
      { name: 'Burger Spicy', price: 5.49, image: 'assets/images/burger.jpg' },
      { name: 'Salade César', price: 6.99, image: 'assets/images/salad.jpg' },
      { name: 'Pâtes Carbonara', price: 7.49, image: 'assets/images/pasta.jpg' },
    ];
  }
}
