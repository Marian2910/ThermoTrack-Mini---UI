import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'ThermoTrack Mini';
  currentTemperature = 22; // Mocked value
  desiredTemperature = 22;
  statusMessage = '';

  increaseTemp() {
    this.desiredTemperature++;
    this.statusMessage = `Desired temperature set to ${this.desiredTemperature}°C`;
  }

  decreaseTemp() {
    this.desiredTemperature--;
    this.statusMessage = `Desired temperature set to ${this.desiredTemperature}°C`;
  }

  openSchedule() {
    this.statusMessage = 'Schedule dialog would open (not implemented)';
  }

  setNow() {
    this.currentTemperature = this.desiredTemperature;
    this.statusMessage = `Temperature set to ${this.currentTemperature}°C`;
  }
}
