import { ItemGrill } from '../models/interface/grill/item-grill';
import { FitsOnGrill } from '../models/types/fits-on-grill';
import { FitsOnGrillParams } from '../models/types/fits-on-grill-params';
import { EMPTY_VALUE } from './default-value';

/**
 * Check if the item fits on the grill and where
 * @param {ItemGrill} item Item than we want to place on the grill
 * @param {string[][]} grillSpace Grill where we want to place the items
 * @returns If the item fits and where it does
 */
export function fitsOnGrill(
  item: ItemGrill,
  grillSpace: string[][]
): FitsOnGrill {
  let { width, length } = item;

  const fitsStraigth: FitsOnGrill = checkFitsStraigth(
    width,
    length,
    grillSpace
  );
  if (fitsStraigth.fits) return fitsStraigth;

  const fitsRotated: FitsOnGrill = checkFitsRotated(length, width, grillSpace);
  if (fitsRotated.fits) {
    item.rotated = true;
    return fitsRotated;
  }

  return { fits: false };
}

/**
 * Check if a rotated item fits on the grill and where
 * @param {number} length Length of the item
 * @param {number} width Width of the item
 * @param {string[][]} grillSpace Grill where we want to place the items
 * @returns If the item fits and where it does
 */
function checkFitsRotated(
  length: number,
  width: number,
  grillSpace: string[][]
): FitsOnGrill {
  const fitsOnGrillITemRotated: FitsOnGrillParams = {
    itemWidth: length,
    itemLength: width,
    grillSpace
  };
  return checkFitsOnGrill(fitsOnGrillITemRotated);
}

/**
 * Check if a item fits on the grill and where
 * @param {number} width Width of the item
 * @param {number} length Length of the item
 * @param {string[][]} grillSpace Grill where we want to place the items
 * @returns If the item fits and where it does
 */
function checkFitsStraigth(
  width: number,
  length: number,
  grillSpace: string[][]
): FitsOnGrill {
  const fitsOnGrill: FitsOnGrillParams = {
    itemWidth: width,
    itemLength: length,
    grillSpace
  };
  return checkFitsOnGrill(fitsOnGrill);
}

/**
 * Finds the exactly slot where we can place the item on the grill
 * @param {number} itemWidth Width of the item
 * @param {number} itemLength Length of the item
 * @param {string[][]} grillSpace Grill where we want to place the items
 * @returns If the item fits and where it does
 */
function checkFitsOnGrill({
  itemWidth,
  itemLength,
  grillSpace
}: FitsOnGrillParams): FitsOnGrill {
  for (const [indexLengthGrill, lengthGrill] of grillSpace.entries()) {
    const indexWidthGrill = lengthGrill.findIndex((w) => w === EMPTY_VALUE);

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
          if (placeValue !== EMPTY_VALUE) break;

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
}
