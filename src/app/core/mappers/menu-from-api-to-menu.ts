import { ItemFromApi } from '../models/interface/api/item-from-api';
import { MenuFromApi } from '../models/interface/api/menu-from-api';
import { Item } from '../models/interface/entities/item';
import { Menu } from '../models/interface/entities/menu';

/**
 * Maps an instance of MenuFromApi to a Menu
 * @param {MenuFromApi} menuFromApi An instance of MenuFromApi
 * @returns An instance of Menu
 */
export function mapMenuFromApiToMenu(menuFromApi: MenuFromApi): Menu {
  const { Id: id, $id, menu, items } = menuFromApi;
  return {
    id,
    $id,
    menu,
    items: mapItemFromApiListToItemList(items)
  } as Menu;
}

/**
 * Maps an array of instance of itemFromApi to an array of Item
 * @param {ItemFromApi[]} itemFromApi An array of instance of ItemFromApi
 * @returns An array of instance of Item
 */
export function mapItemFromApiListToItemList(itemFromApi: ItemFromApi[]): Item[] {
  return itemFromApi.map((item) => {
    const { Id, $id, Duration, Length, Name, Quantity, Width } = item;
    return {
      id: Id,
      $id,
      name: Name,
      length: Length,
      width: Width,
      duration: Duration,
      quantity: Quantity
    } as Item;
  });
}
