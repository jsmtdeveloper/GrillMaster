import { Menu } from '../models/interface/entities/menu';
import { ItemGrill } from '../models/interface/grill/item-grill';

/**
 * Get all the items of the current menu
 * @param {Menu} menu The menu from we want to get all the items
 * @returns An array of the currentItems from menu
 */
export function getCurrentItems(menu: Menu): ItemGrill[] {
  let result: ItemGrill[] = [];
  menu.items.forEach((item) => {
    for (let index = 0; index < item.quantity; index++) {
      result.push({ ...item, $id: item.$id + '-' + index.toString(), quantity: index, grilled: false, canBeGrill: true, rotated: false });
    }
  });
  return result;
}

/**
 * Get the size of the item if its straigth or rotated
 * @param {ItemGrill} item Item we want to get size
 * @returns The correct length and width of the item
 */
export function getItemSizeCheckingRotation(item: ItemGrill) {
  const lengthItem = item.rotated ? item.width : item.length;
  const widthItem = item.rotated ? item.length : item.width;
  return { lengthItem, widthItem };
}

/**
 * Creates an id with the item's Id and the current quantity
 * @param {ItemGrill} item Item we want to get an Id
 * @returns Unique Id for the item
 */
export function getItemIdPerEachQuantity(item: ItemGrill) {
  return `${item.$id}-${item.quantity}`;
}
