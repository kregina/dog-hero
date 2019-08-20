import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlights'
})
export class HighlightsPipe implements PipeTransform {

  transform(item: any): any {
    switch (item.name) {
      case 'room_type':
        item.name = 'flat';
        item.value = 'Apê';
        break;
      case 'loyal_customers':
        item.name = 'repeat-guests';
        item.value = `${item.value} Clientes fiéis`;
        break;
      case 'supervision':
        item.name = 'exclusive';
        item.value = 'Um cliente por vez';
        break;

      default:
        break;
    }
    return item;
  }

}
