import { Item } from './item';

export interface Menu {
  $id: string;
  id: string;
  menu: string;
  items: Item[];
}
