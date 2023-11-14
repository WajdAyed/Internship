import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: Date): string {
    return value.toString().split('').splice(0, 10).join('');
  }

}
