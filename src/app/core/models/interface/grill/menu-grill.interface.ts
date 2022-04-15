import { BoardGrill } from './board-grill.interface';

export interface MenuGrill {
  menuId: string;
  name: string;
  rounds: BoardGrill[];
}
