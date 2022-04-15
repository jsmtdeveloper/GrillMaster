import { Menu } from '@app/core/models/interface/entities/menu';
import { Grill } from '@app/core/models/interface/grill/grill';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';
import { FitsOnGrill } from '../../models/types/fits-on-grill';
import { PushItemToBoarParams } from '../../models/types/push-item-to-grill-params';
import { FitsOnGrillParams } from '@app/core/models/types/fits-on-grill-params';
import { DEFAULT_SIZE_GRILL } from './default-grill';

const emptyPlace = '';

export const getCurrentItems = (menu: Menu): ItemGrill[] => {
  let result: ItemGrill[] = [];
  menu.items.forEach((item) => {
    for (let index = 0; index < item.quantity; index++) {
      result.push({ ...item, quantity: index, grilled: false, rotated: false });
    }
  });
  return result;
};

export const getNewGrill = (): Grill => {
  return { ...DEFAULT_SIZE_GRILL, grillSpace: createDefaultGrill() };
};

export function placeOnGrill(items: ItemGrill[], grill: string[][]) {
  for (const item of items) {
    placeItemOnGrill(item, grill);
  }
  return grill;
}

const placeItemOnGrill = (item: ItemGrill, grill: string[][]) => {
  const { fits, indexWidth, indexLength } = fitsOnGrill(item, grill);

  if (!fits) return [];

  return pushItemToGrill({
    indexWidth: Number(indexWidth),
    indexLength: Number(indexLength),
    item,
    grill
  });
};

const createDefaultGrill = (): string[][] => {
  let grillWidth = [] as Array<string>;
  let grillLength = [];

  grillWidth.length = DEFAULT_SIZE_GRILL.width;
  grillWidth.fill(emptyPlace);
  for (let index = 0; index < DEFAULT_SIZE_GRILL.length; index++) {
    grillLength.push([...grillWidth]);
  }

  return grillLength;
};

const fitsOnGrill = (item: ItemGrill, grillSpace: string[][]): FitsOnGrill => {
  let { width, length } = item;

  const fitsStraigth: FitsOnGrill = checkFitsOnGrill({
    itemWidth: width,
    itemLength: length,
    grillSpace
  });
  if (fitsStraigth.fits) return fitsStraigth;

  const fitsRotated: FitsOnGrill = checkFitsOnGrill({
    itemWidth: length,
    itemLength: width,
    grillSpace
  });
  if (fitsRotated.fits) {
    item.rotated = true;
    return fitsRotated;
  }

  return { fits: false };
};

const checkFitsOnGrill = ({
  itemWidth,
  itemLength,
  grillSpace
}: FitsOnGrillParams): FitsOnGrill => {
  for (const [indexLengthGrill, lengthGrill] of grillSpace.entries()) {
    const indexWidthGrill = lengthGrill.findIndex((w) => w === emptyPlace);

    if (indexWidthGrill !== -1) {
      let remainingLength = itemLength;
      let remainingwidth = itemWidth;
      for (
        let indexLength = indexLengthGrill;
        indexLength < grillSpace.length && remainingLength > 0;
        indexLength++
      ) {
        remainingwidth = itemWidth;
        for (
          let indexWidthTmp = indexWidthGrill;
          indexWidthTmp < grillSpace[indexLength].length && remainingwidth > 0;
          indexWidthTmp++
        ) {
          const placeValue = grillSpace[indexLength][indexWidthTmp];
          if (placeValue !== emptyPlace) break;

          remainingwidth--;
        }
        remainingLength--;
      }
      const fits = remainingLength === 0 && remainingwidth === 0;
      if (fits)
        return {
          fits,
          indexWidth: indexWidthGrill,
          indexLength: indexLengthGrill
        };
    }
  }

  return { fits: false };
};

const pushItemToGrill = ({
  indexWidth: widthStart,
  indexLength: lengthStart,
  item,
  grill
}: PushItemToBoarParams) => {
  const { lengthItem, widthItem } = getItemSizeCheckingRotation(item);
  const id = getItemIdPerEachQuantity(item);

  const lengthEnd = lengthStart + lengthItem;

  for (let index = lengthStart; index < lengthEnd; index++) {
    const widthEnd = widthStart + widthItem;
    for (let index1 = widthStart; index1 < widthEnd; index1++) {
      grill[index][index1] = id;
    }
  }
  item.grilled = true;
  return grill;
};

const getItemSizeCheckingRotation = (item: ItemGrill) => {
  const lengthItem = item.rotated ? item.width : item.length;
  const widthItem = item.rotated ? item.length : item.width;
  return { lengthItem, widthItem };
};

const getItemIdPerEachQuantity = (item: ItemGrill) => {
  return `${item.$id}-${item.quantity}`;
};
