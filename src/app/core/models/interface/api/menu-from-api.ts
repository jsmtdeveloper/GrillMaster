import { itemFromApi } from './item-from-api';

export interface MenuFromApi {
  Id: string;
  $id: string;
  menu: string;
  items: itemFromApi[];
}
