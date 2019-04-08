import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seriesAnswerTypeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAnswerSeriesForm();
  }

  createAnswerSeriesForm() {
    this.seriesAnswerTypeForm = this.fb.group({
      answerSeriesRows: this.fb.array([])
    });
    this.seriesAnswerTypeForm.setControl('answerSeries', this.fb.array([]))
  }

  get answerSeries(): FormArray {
    return this.seriesAnswerTypeForm.get('answerSeries') as FormArray;
  }

  addNewAnswerRow() {
    this.answerSeries.push(this.initAnswerSeriesRow());
  }

  deleteAnswerRow(index: number) {
    this.answerSeries.removeAt(index);
  }

  initAnswerSeriesRow() {
    return this.fb.group({
      displayText: [''],
      answerLabel: ['']
    });
  }

  ngOnInit() {

  }
}
