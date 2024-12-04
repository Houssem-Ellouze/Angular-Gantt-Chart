
import { Component } from '@angular/core';
import { projectNewData } from '../data';
import {GanttModule} from '@syncfusion/ej2-angular-gantt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    GanttModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  public data: object[] = projectNewData;
  public timelineView: object = {timelineViewMode:"Week"} //Default one.
  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "StartDate", headerText: "StartDate", format: "dd-MMM-yy"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor"
  }
};
