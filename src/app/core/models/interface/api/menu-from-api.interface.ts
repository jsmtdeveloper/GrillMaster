import { itemFromApi } from './item-from-api.interface';

export interface MenuFromApi {
  Id: string;
  $id: string;
  menu: string;
  items: itemFromApi[];
}
