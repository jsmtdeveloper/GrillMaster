import { ItemGrill } from '@app/core/models/interface/grill/item-grill';

export type PushItemToBoarParams = {
  indexWidth: number;
  indexLength: number;
  item: ItemGrill;
  grill: string[][];
};
