import { Pipe, PipeTransform } from '@angular/core';
import { Former } from 'src/app/models/former';

@Pipe({
  name: 'formerList'
})
export class FormerListPipe implements PipeTransform {

  transform(value: Former[]): string {
    let result: string[] = [];
    value.forEach(elem => {
      result.push(elem.fullname);
    });
    return result.join(', ');
  }

}
