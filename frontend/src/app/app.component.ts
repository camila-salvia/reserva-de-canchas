import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeSlots: any;
  removeTimeSlot(_t10: any) {
  throw new Error('Method not implemented.');
  }
  addTimeSlot() {
  throw new Error('Method not implemented.');
  }
  title = 'Proyect Booking';
}
