import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonClicks: number[] = [];
  numberOfClicks = 0;

  showDetails = false;
  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.numberOfClicks++;
    this.buttonClicks.push(this.numberOfClicks);
  }

  blueIfMoreThan5() {
    return this.numberOfClicks >= 5 ? 'blue' : '';
  }
}
