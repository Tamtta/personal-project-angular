import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BudgetListComponent } from './budget-list.component';

describe('BudgetListComponent', () => {
  let component: BudgetListComponent;
  let fixture: ComponentFixture<BudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetListComponent],
      imports: [
        MatDialogModule,
        TranslateModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
