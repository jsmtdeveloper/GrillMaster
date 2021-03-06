import { Grill } from '../models/interface/grill/grill';
import { ItemGrill } from '../models/interface/grill/item-grill';
import { PushItemToBoarParams } from '../models/types/push-item-to-grill-params';
import { fitsOnGrill } from './fits-on-grill';
import { getItemIdPerEachQuantity, getItemSizeCheckingRotation } from './items-provider';

/**
 * Try to place a list of items in a grill
 * @param {ItemGrill[]} items List of items than we want to place on the grill
 * @param {Grill} grill Grill where we want to place the items
 */
export function placeOnGrill(items: ItemGrill[], grill: Grill): void {
  for (const item of items) {
    placeItemOnGrill(item, grill);
  }
}

/**
 * If the item fits, try to push the item on the grill
 * @param {ItemGrill} item Item than we want to place on the grill
 * @param {string[][]} grillSpace Grill where we want to place the items
 */
function placeItemOnGrill(item: ItemGrill, grill: Grill): void {
  const { fits, indexWidth, indexLength } = fitsOnGrill(item, grill.grillSpace);

  if (!fits) return;

  pushItemToGrill({
    indexWidth: Number(indexWidth),
    indexLength: Number(indexLength),
    item,
    grill
  });
}

/**
 * push the item on the grill in base of the length and width we recive
 * @param {number} widthStart Grill where we want to place the items
 * @param {number} lengthStart Item than we want to place on the grill
 * @param {ItemGrill} item Item than we gonna push on the grill
 * @param {Grill} grill Grill where we want to push the items
 */
function pushItemToGrill({ indexWidth: widthStart, indexLength: lengthStart, item, grill }: PushItemToBoarParams): void {
  const { lengthItem, widthItem } = getItemSizeCheckingRotation(item);
  const { $id } = item;
  const lengthEnd = lengthStart + lengthItem;

  for (let currentLength = lengthStart; currentLength < lengthEnd; currentLength++) {
    const widthEnd = widthStart + widthItem;
    for (let currentWidth = widthStart; currentWidth < widthEnd; currentWidth++) {
      grill.grillSpace[currentLength][currentWidth] = $id;
      item.y = lengthStart;
      item.x = widthStart;
    }
  }
  item.grilled = true;
  grill.itemsOnGrill.push(item);
}
