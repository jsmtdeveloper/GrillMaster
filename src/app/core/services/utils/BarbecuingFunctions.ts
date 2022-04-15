import { isNgTemplate } from '@angular/compiler';
import { Menu } from '@app/core/models/interface/entities/menu.inteface';
import { BoardGrill } from '@app/core/models/interface/grill/board-grill.interface';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill.interface';
import { DefaultSizeBoardGrill } from './defaultSizeBoardGrill';
import { FitsOnBoard } from './fitsOnBoard';

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

export const getNewBoard = (): BoardGrill => {
  return { ...DefaultSizeBoardGrill, boardSpace: [...createDefaultBoard()] };
};

export async function placeInBoard(items: ItemGrill[], board: string[][]) {
  return new Promise(async (resolve, rejects) => {
    for await (const item of items) {
      const hola = placeItemInBoard(item, board);
    }

    resolve(board);
    //console.table(board);
  });
}

const placeItemInBoard = (item: ItemGrill, board: string[][]) => {
  const { fits, indexWidth, indexLength } = fitsInBoard(item, board);

  if (!fits) return [];

  return pushItemToBoard({
    indexWidth: Number(indexWidth),
    indexLength: Number(indexLength),
    item,
    board
  });
};

const createDefaultBoard = (): string[][] => {
  let grillWidth = [] as Array<string>;
  let grillLength = [];

  grillWidth.length = DefaultSizeBoardGrill.width;
  grillWidth.fill('');
  for (let index = 0; index < DefaultSizeBoardGrill.length; index++) {
    grillLength.push([...grillWidth]);
  }

  return grillLength;
};

const fitsInBoard = (item: ItemGrill, boardSpace: string[][]): FitsOnBoard => {
  let { width, length } = item;
  let result: FitsOnBoard;

  result = checkFitsInBoard(width, length, boardSpace);
  if (result.fits) return result;

  result = checkFitsInBoard(length, width, boardSpace);
  if (result.fits) {
    item.rotated = true;
    return result;
  }

  return { fits: false };
};

const checkFitsInBoard = (
  width: number,
  length: number,
  boardSpace: string[][]
): FitsOnBoard => {
  for (const [indexLength, lengthBoard] of boardSpace.entries()) {
    const indexWidth = lengthBoard.findIndex((w) => w === emptyPlace);

    if (indexWidth !== -1) {
      let lengthTmp = length;
      let widthTmp = width;
      for (
        let indexLengthTmp = indexLength;
        indexLengthTmp < boardSpace.length && lengthTmp > 0;
        indexLengthTmp++
      ) {
        widthTmp = width;
        for (
          let indexWidthTmp = indexWidth;
          indexWidthTmp < boardSpace[indexLengthTmp].length && widthTmp > 0;
          indexWidthTmp++
        ) {
          const place = boardSpace[indexLengthTmp][indexWidthTmp];
          if (place !== emptyPlace) break;
          widthTmp--;
        }
        lengthTmp--;
      }
      const fits = lengthTmp === 0 && widthTmp === 0;
      if (fits)
        return {
          fits,
          indexWidth: indexWidth,
          indexLength: indexLength
        };
    }
  }

  return { fits: false };
};

interface pushItemToBoarParams {
  indexWidth: number;
  indexLength: number;
  item: ItemGrill;
  board: string[][];
}

const pushItemToBoard = ({
  indexWidth,
  indexLength,
  item,
  board
}: pushItemToBoarParams) => {
  const lengthItem = item.rotated ? item.width : item.length;
  const widthItem = item.rotated ? item.length : item.width;
  const id = `${item.$id}-${item.quantity}`;

  const lengtTmp = indexLength + lengthItem;
  for (let index = indexLength; index < lengtTmp; index++) {
    const widthTmp = indexWidth + widthItem;
    for (let index1 = indexWidth; index1 < widthTmp; index1++) {
      board[index][index1] = id;
    }
  }
  item.grilled = true;
  return board;
};
