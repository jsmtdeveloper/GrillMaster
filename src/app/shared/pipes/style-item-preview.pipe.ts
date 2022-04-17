import { Pipe, PipeTransform } from '@angular/core';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';
import { ItemColor } from '../../core/models/types/item-id-color';

const DEFAULT_SCALE = 9;
const DEFAULT_ITEM_COLOR = '#ccc';
@Pipe({
  name: 'styleItemPreview'
})
export class StyleItemPreviewPipe implements PipeTransform {
  transform(item: ItemGrill, currentItemsColors: ItemColor[]) {
    const dataPrepared = this.prepareGridColumnData(item);
    if (!dataPrepared) return {};

    const { gridColumStart, gridComlumEnd, gridRowStart, gridRowEnd } = dataPrepared;
    const color = currentItemsColors.find((w) => w.id === item.id)?.color;

    return {
      border: '1px solid black',
      'vertical-align': 'top',
      'grid-column-start': gridColumStart,
      'grid-column-end': gridComlumEnd,
      'grid-row-start': gridRowStart,
      'grid-row-end': gridRowEnd,
      'border-radius': '0.5em',
      'background-color': color ? color : DEFAULT_ITEM_COLOR
    };
  }

  private prepareGridColumnData(item: ItemGrill) {
    if (item.y == undefined || item.x == undefined) return null;
    const { x, y, rotated, width, length } = item;
    const gridColumStart = x + 1;
    const gridRowStart = y + 1;
    const gridComlumEnd = rotated ? x + 1 + length : x + 1 + width;
    const gridRowEnd = rotated ? y + 1 + width : y + 1 + length;
    return { gridColumStart, gridComlumEnd, gridRowStart, gridRowEnd };
  }
}
