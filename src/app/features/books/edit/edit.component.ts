import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget } from '../interfaces/budget.class';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  // @Input() item!: Budget;

  constructor(
    public dialog: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Budget
  ) {}

  ngOnInit(): void {}

  onSubmitted(update: Budget) {
    this.dialog.close(update);
  }
}
