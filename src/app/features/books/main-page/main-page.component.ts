import { Component, OnInit } from '@angular/core';
import { Budget } from '../interfaces/budget.class';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  items: Budget[] = [];

  constructor() {}

  ngOnInit(): void {}

  addItem(item: Budget) {
    this.items.push(item);
  }

  itemdlt(item: Budget) {
    let i = this.items.indexOf(item);
    this.items.splice(i, 1);
  }
}
