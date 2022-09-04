import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDatePipe',
})
export class CustomDatePipePipe implements PipeTransform {
  transform(date: Date | string, format: string = 'yyyy-MM-dd'): string | null {
    date = new Date(date);
    return new DatePipe('en-US').transform(date, format);
  }
}
