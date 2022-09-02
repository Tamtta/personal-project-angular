import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Budget } from '../interfaces/budget.class';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: Budget = new Budget();
  @Output() formSubmit: EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('weew');
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
