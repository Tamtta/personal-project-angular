import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Budget } from '../interfaces/budget.class';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent implements OnInit {
  @Input() items!: Budget[];
  @Output() delete: EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: Budget) {
    this.delete.emit(item);
  }
}
