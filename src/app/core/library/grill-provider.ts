import { Grill } from '@app/core/models/interface/grill/grill';
import { DEFAULT_SIZE_GRILL, EMPTY_VALUE } from './default-value';

/**
 * Creates a new grill in base of the DEFAULT_SIZE_GRILL's size and grillSpace get from createDefaultGrill result
 * @returns A new grill
 */
export function getNewGrill(): Grill {
  return { ...DEFAULT_SIZE_GRILL, grillSpace: createDefaultGrill() };
}

/**
 * Creates a bidimensional array of strings en base of DEFAULT_SIZE_GRILL sizes
 * @returns A new grillSpace
 */
function createDefaultGrill(): string[][] {
  let grillWidth = [] as Array<string>;
  let grillLength = [];

  grillWidth.length = DEFAULT_SIZE_GRILL.width;
  grillWidth.fill(EMPTY_VALUE);

  for (let index = 0; index < DEFAULT_SIZE_GRILL.length; index++) {
    grillLength.push([...grillWidth]);
  }
  return grillLength;
}

/**
 * Checkes every space of the grill and says if it's empty or not
 * @returns true or false if the grill its empty or not
 */
export function grillIsEmpty(currentGrill: Grill) {
  const { grillSpace } = currentGrill;
  return grillSpace.every((length) => length.every((width) => width === EMPTY_VALUE));
}
