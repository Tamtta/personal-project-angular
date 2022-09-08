import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Budget } from '../../interfaces/budget.class';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent implements OnInit {
  @Input() item!: Budget;
  @Output() formSubmit: EventEmitter<Budget> = new EventEmitter<Budget>();
  new!: boolean;
  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      this.new = false;
    } else {
      this.new = true;
      this.item = new Budget();
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
