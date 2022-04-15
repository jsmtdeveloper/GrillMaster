import { Item } from '../entities/item';

export interface ItemGrill extends Item {
  grilled: boolean;
  rotated: boolean;
}
