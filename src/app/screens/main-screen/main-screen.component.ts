import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    HeroComponent,
    CardsComponent
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {

}
