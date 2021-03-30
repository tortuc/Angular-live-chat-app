import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'startsWith', pure: false})
export class StartsWithPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    return value.filter((x:any) => x.name.toLowerCase().startsWith(term.toLowerCase()));
  }
}
