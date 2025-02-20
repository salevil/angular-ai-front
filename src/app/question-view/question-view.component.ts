import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent {
  question: string = '';
  response: string | null = null;

  constructor(private http: HttpClient) {}

  askQuestion() {
    this.http.post<{ response: string }>('http://localhost:5000/ask', { question: this.question })
      .subscribe(
        data => this.response = data.response,
        error => console.error('Error:', error)
      );
  }
}
