import { ItemFromApi } from './item-from-api';

/**This interface has the format of the Menus recived from the API */
export interface MenuFromApi {
  Id: string;
  $id: string;
  menu: string;
  items: ItemFromApi[];
}
