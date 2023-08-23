import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedOptions: string[] = [];
  allQuestionsAnswered: boolean = false;
  nextQuestion: boolean = false;
  resultsVisible: boolean = false;
  submitMessage: string = '';
  Answer:string = '';

  questions: any[] = [
    {
      question: 'Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: '<b>',
    },
    {prequestion: 'What is HTML?',
      options: ['HTML describes the structure of a webpage', 'HTML is the standard markup language mainly ', 'HTML consists of a set of elements that helps the browser', 'All of the mentioned'],
      answer: 'All of the mentioned',
    },
    {
      question: 'Who is the father of HTML',
      options: ['Rasmus Lerdorf', 'Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'],
      answer: 'Tim Berners-Lee',
    },
    {
      question: 'HTML stands for __________',
      options: ['HyperText Markup Language', 'HyperText Machine Language', 'HyperText Marking Language', 'HighText Marking Language'],
      answer: 'HyperText Markup Language',
    },
    {
      question: ' What is the correct syntax of doctype in HTML5?',
      options: ['</doctype html>', '<doctype html>', '<doctype html!>', '<!doctype html>'],
      answer: '<!doctype html>',
    }
    // ... Add other questions
  ];

  ngOnInit() {
    this.selectedOptions = new Array(this.questions.length).fill('');
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  goToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
  }
}
isSubmittedEnabled: boolean = false;
submitAnswers() {// Implement logic to submit answers

  Swal.fire('Thank you...', 'you submitted succesfully', 'success')
  this.resultsVisible = true; 
  
  }


  showResults() {
    // ... Your existing submission logic ...

    // Display the results and success message
    this.resultsVisible = true;
    this.submitMessage = 'Your answers have been submitted successfully.';
  }

  isAnswerCorrect(index: number): boolean {
    return this.selectedOptions[index] === this.questions[index].correctOption;
  }

  // Function to calculate the total number of correct answers
  calculateCorrectAnswers(): number {
    return this.selectedOptions.filter((response, index) => this.isAnswerCorrect(index)).length;
  }

  // Function to calculate the total number of incorrect answers
  calculateIncorrectAnswers(): number {
    return this.questions.length - this.calculateCorrectAnswers();
  }

  // Function to calculate the total score
  calculateScore(): number {
    return this.calculateCorrectAnswers();
  }
  
  
}
