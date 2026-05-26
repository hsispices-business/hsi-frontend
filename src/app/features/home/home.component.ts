import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
