import { ItemGrill } from '@app/core/models/interface/grill/item-grill';

/**
 * Typed params than we use on the methods than push the item on the grill
 * @example
 * {indexWidth: number;indexLength: number;item: ItemGrill;grillSpace: string[][];};
 */
export type PushItemToBoarParams = {
  indexWidth: number;
  indexLength: number;
  item: ItemGrill;
  grillSpace: string[][];
};
