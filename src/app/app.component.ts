import { Component } from '@angular/core';
import { DaneOsobyService } from './services/dane-osoby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LAB4MM'
  
  tekstWZmiennej = "Tekst w zmiennej!"

  cars = [ 'Audi', 'BMW', 'Mitsubishi', 'Ford', 'Seat', 'Mazda', 'Mercedes-Benz' ]

  osoby: string[] = [ 'Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek' ]

  constructor(private daneOsobyService: DaneOsobyService) {}

  ngOnInit() {
  }

}
