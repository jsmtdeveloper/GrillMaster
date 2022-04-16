import { Menu } from '@app/core/models/interface/entities/menu';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';

/**
 * Maps an instance of Menu to a MenuGrill
 * @param {Menu} menu An instance of Menu
 * @returns An instance of MenuGrill
 */
export function mapMenuToMenuGrill(menu: Menu): MenuGrill {
  return {
    menuId: menu.$id,
    name: menu.menu,
    rounds: [],
    itemsGrilled: [],
    itemsNoGrilled: []
  };
}
