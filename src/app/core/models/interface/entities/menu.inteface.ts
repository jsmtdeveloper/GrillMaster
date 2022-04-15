import { Item } from './item.inteface';

export interface Menu {
  $id: string;
  id: string;
  menu: string;
  items: Item[];
}
