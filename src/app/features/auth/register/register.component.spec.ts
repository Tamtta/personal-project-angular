import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        RouterTestingModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button before form is valid', () => {
    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.disabled
    ).toBeTruthy();

    component.form.get('name')?.setValue('Tamtaaaaaaa');
    component.form.get('username')?.setValue('wee4');
    component.form.get('mail')?.setValue('Jojua@gmail.com');
    component.form.get('password')?.setValue('12345678y');
    component.form.get('confirm')?.setValue('12345678y');

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.disabled
    ).toBeFalsy();
  });
});
