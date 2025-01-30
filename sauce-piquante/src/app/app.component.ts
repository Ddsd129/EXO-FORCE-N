import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <div>
  <p>Bienvenue dans  notre restaurant</p>
  </div>
  `,
  styleUrls:[]
})
export class AppComponent{
  title: string = 'Sauce Piquante';
}