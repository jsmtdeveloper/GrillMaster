import { Pipe, PipeTransform } from '@angular/core';
import { Grill } from '@app/core/models/interface/grill/grill';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';

@Pipe({
  name: 'realItemOrder'
})
export class RealItemOrderPipe implements PipeTransform {
  transform(round: Grill, ...args: unknown[]): ItemGrill[] {
    const { grillSpace, itemsOnGrill } = round;
    let realOrder: ItemGrill[] = [];

    grillSpace.forEach((length) => {
      length.forEach((itemId) => {
        const indexItem = realOrder.findIndex((item) => item && item.$id === itemId);
        if (indexItem === -1) {
          const item = itemsOnGrill.find((w) => w.$id === itemId);
          if (item) realOrder.push(item);
        }
      });
    });

    return realOrder;
  }
}
