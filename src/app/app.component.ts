import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionViewComponent } from './question-view/question-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My very own Angular Fronted AI Assistant';
}
