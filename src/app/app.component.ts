import { Component } from '@angular/core';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';

  constructor()
  {
    console.log("json data",data);
  }
  
}
