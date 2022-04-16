import { Pipe, PipeTransform } from '@angular/core';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';

const DEFAULT_SCALE = 9;

@Pipe({
  name: 'styleItemPreview'
})
export class StyleItemPreviewPipe implements PipeTransform {
  transform(item: ItemGrill, ...args: unknown[]) {
    return {
      width: item.rotated ? (item.length * DEFAULT_SCALE) / 10 + 'em' : (item.width * DEFAULT_SCALE) / 10 + 'em',
      height: item.rotated ? (item.width * DEFAULT_SCALE) / 10 + 'em' : (item.length * DEFAULT_SCALE) / 10 + 'em',
      border: '1px solid black',
      display: 'inline-block',
      position: 'relative ',
      'vertical-align': 'top'
    };
  }
}
