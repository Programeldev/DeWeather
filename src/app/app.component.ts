import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DeWeather';
  switchComponent = false;

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    if(event.deltaY) {
      if(this.switchComponent) {
        d = document.getElementById('d1');
        d.scrollIntoView({behavior: 'smooth'});
        this.switchComponent = false;
      }
      else {
        d = document.getElementById('d2');
        d.scrollIntoView({behavior: 'smooth'});
        this.switchComponent = true;
      }
    }
  }
}
