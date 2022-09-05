import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Budget } from '../../interfaces/budget.class';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetCardComponent implements OnInit {
  @Input() isIncome: boolean = true;
  @Input() item!: Budget;
  @Output() btnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClicked.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
