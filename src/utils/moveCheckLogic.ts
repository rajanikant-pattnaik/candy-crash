// import { NamedTupleMember } from "typescript";=================

export const isColumnofFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnofFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnofFour; i++) {
    const columnofFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidecolor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";

    if (
      columnofFour.every(
        (candy: number) => newBoard[candy] === decidecolor && !isBlank
      )
    ) {
      columnofFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const isColumnofThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnofThree: number
) => {
  for (let i: number = 0; i <= formulaForColumnofThree; i++) {
    const columnofThree: number[] = [i, i + boardSize, i + boardSize * 2];
    const decidecolor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";

    if (
      columnofThree.every(
        (candy: number) => newBoard[candy] === decidecolor && !isBlank
      )
    ) {
      columnofThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowofFour = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];

    const decidecolor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfFour.every(
        (candy: number) => newBoard[candy] === decidecolor && !isBlank
      )
    ) {
      rowOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowofThree = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];

    const decidecolor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfThree.every(
        (candy: number) => newBoard[candy] === decidecolor && !isBlank
      )
    ) {
      rowOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
