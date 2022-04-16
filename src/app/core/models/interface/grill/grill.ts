import { Item } from '../entities/item';
import { ItemGrill } from './item-grill';

/**Grill than we use in all the checking and push items process */
export interface Grill {
  width: number;
  length: number;
  grillSpace: string[][];
  itemsOnGrill: ItemGrill[];
}
