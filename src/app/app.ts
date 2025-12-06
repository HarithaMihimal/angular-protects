import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dp-education-example');
  imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png';
  areaLabel:string = 'Area of triangle';
}
