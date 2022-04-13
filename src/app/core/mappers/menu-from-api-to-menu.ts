import { itemFromApi } from '../models/interface/api/item-from-api';
import { MenuFromApi } from '../models/interface/api/menu-from-api';
import { Item } from '../models/interface/item.inteface';
import { Menu } from '../models/interface/menu.inteface';

export const mapMenuFromApiToMenu = (menuFromApi: MenuFromApi): Menu => {
  const { Id: id, $id, menu, items } = menuFromApi;
  return {
    id,
    $id,
    menu,
    items: mapItemFromApiListToItemList(items)
  } as Menu;
};

export const mapItemFromApiListToItemList = (
  itemFromApi: itemFromApi[]
): Item[] => {
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
};
