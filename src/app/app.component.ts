import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GanttModule} from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GanttModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Gantt-Chart';
}
