import { itemFromApi } from '../models/interface/api/item-from-api.interface';
import { MenuFromApi } from '../models/interface/api/menu-from-api.interface';
import { Item } from '../models/interface/entities/item.inteface';
import { Menu } from '../models/interface/entities/menu.inteface';

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
