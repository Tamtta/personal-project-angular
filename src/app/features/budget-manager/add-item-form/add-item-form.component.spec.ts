import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AddItemFormComponent } from './add-item-form.component';

describe('AddItemFormComponent', () => {
  let component: AddItemFormComponent;
  let fixture: ComponentFixture<AddItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItemFormComponent],
      imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
