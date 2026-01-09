import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentShowcaseComponent } from "./components/component-showcase/component-showcase.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentShowcaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
