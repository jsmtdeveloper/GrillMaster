import { itemFromApi } from '../models/interface/api/item-from-api';
import { MenuFromApi } from '../models/interface/api/menu-from-api';
import { Item } from '../models/interface/entities/item';
import { Menu } from '../models/interface/entities/menu';

export function mapMenuFromApiToMenu(menuFromApi: MenuFromApi): Menu {
  const { Id: id, $id, menu, items } = menuFromApi;
  return {
    id,
    $id,
    menu,
    items: mapItemFromApiListToItemList(items)
  } as Menu;
}

export function mapItemFromApiListToItemList(
  itemFromApi: itemFromApi[]
): Item[] {
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
