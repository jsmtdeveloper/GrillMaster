import { ItemGrill } from '../models/interface/grill/item-grill';
import { PushItemToBoarParams } from '../models/types/push-item-to-grill-params';
import { fitsOnGrill } from './fits-on-grill';
import {
  getItemIdPerEachQuantity,
  getItemSizeCheckingRotation
} from './items-provider';

/**
 * Try to place a list of items in a grill
 * @param {ItemGrill[]} items List of items than we want to place on the grill
 * @param {string[][]} grillSpace Grill where we want to place the items
 */
export function placeOnGrill(items: ItemGrill[], grillSpace: string[][]): void {
  for (const item of items) {
    placeItemOnGrill(item, grillSpace);
  }
}

/**
 * If the item fits, try to push the item on the grill
 * @param {ItemGrill} item Item than we want to place on the grill
 * @param {string[][]} grillSpace Grill where we want to place the items
 */
function placeItemOnGrill(item: ItemGrill, grillSpace: string[][]): void {
  const { fits, indexWidth, indexLength } = fitsOnGrill(item, grillSpace);

  if (!fits) return;

  pushItemToGrill({
    indexWidth: Number(indexWidth),
    indexLength: Number(indexLength),
    item,
    grillSpace
  });
}

/**
 * push the item on the grill in base of the length and width we recive
 * @param {number} widthStart Grill where we want to place the items
 * @param {number} lengthStart Item than we want to place on the grill
 * @param {ItemGrill} item Item than we gonna push on the grill
 * @param {string[][]} grillSpace Grill where we want to push the items
 */
function pushItemToGrill({
  indexWidth: widthStart,
  indexLength: lengthStart,
  item,
  grillSpace
}: PushItemToBoarParams): void {
  const { lengthItem, widthItem } = getItemSizeCheckingRotation(item);
  const id = getItemIdPerEachQuantity(item);

  const lengthEnd = lengthStart + lengthItem;

  for (let index = lengthStart; index < lengthEnd; index++) {
    const widthEnd = widthStart + widthItem;
    for (let index1 = widthStart; index1 < widthEnd; index1++) {
      grillSpace[index][index1] = id;
    }
  }
  item.grilled = true;
}
