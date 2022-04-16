import { Grill } from './grill';
import { ItemGrill } from './item-grill';

/**Menu than we use in all the checking and push items process */
export interface MenuGrill {
  menuId: string;
  name: string;
  rounds: Grill[];
  itemsGrilled: ItemGrill[];
  itemsNoGrilled: ItemGrill[];
}
