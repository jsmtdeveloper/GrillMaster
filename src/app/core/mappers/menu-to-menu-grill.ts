import { Menu } from '@app/core/models/interface/entities/menu';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';

export function mapMenuToMenuGrill(menu: Menu): MenuGrill {
  return {
    menuId: menu.$id,
    name: menu.menu,
    rounds: []
  };
}
