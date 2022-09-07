import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { Budget } from '../interfaces/budget.class';
import { Update } from '../interfaces/update.interface';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BudgetListComponent implements OnInit {
  @Input() items!: Budget[];
  @Output() delete: EventEmitter<Budget> = new EventEmitter<Budget>();
  @Output() udpateEvent: EventEmitter<Update> = new EventEmitter<Update>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(item: Budget) {
    this.delete.emit(item);
  }

  onCardClicked(item: Budget) {
    const dialog = this.dialog.open(EditComponent, {
      width: '700px',
      data: item,
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.udpateEvent.emit({
          old: item,
          new: res,
        });
      }
    });
  }
}
