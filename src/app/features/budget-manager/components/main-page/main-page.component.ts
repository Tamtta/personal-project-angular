import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Budget } from '../../interfaces/budget.class';
import { Update } from '../../interfaces/update.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  items: Budget[] = [];
  total: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addItem(item: Budget) {
    this.items.push(item);
    this.total += item.amount;
  }

  itemdlt(item: Budget) {
    let i = this.items.indexOf(item);
    this.items.splice(i, 1);
    this.total -= item.amount;
  }

  update(update: Update) {
    this.items[this.items.indexOf(update.old)] = update.new;

    this.total -= update.old.amount;
    this.total += update.new.amount;
  }
}
