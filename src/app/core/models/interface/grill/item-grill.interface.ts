import { Item } from '../entities/item.inteface';

export interface ItemGrill extends Item {
  grilled: boolean;
  rotated: boolean;
}
