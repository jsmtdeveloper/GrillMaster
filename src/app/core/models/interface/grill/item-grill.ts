import { Item } from '../entities/item';

/**item than we use in all the checking and push items process */
export interface ItemGrill extends Item {
  grilled: boolean;
  rotated: boolean;
  canBeGrill: boolean;
}
