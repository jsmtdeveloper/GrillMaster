import { Item } from './item';

/** Menu than we print on the component */
export interface Menu {
  $id: string;
  id: string;
  menu: string;
  items: Item[];
}
