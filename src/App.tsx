import React, { useEffect } from "react";
import Board from "./components/Board";
import { moveBelow, updateBoard } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createBoard } from "./utils/createBoard";
import {
  formulaForColumnofFour,
  formulaForColumnofThree,
  generateInvalidMoves,
} from "./utils/formulas";
import {
  isColumnofFour,
  isColumnofThree,
  checkForRowofFour,
  checkForRowofThree,
} from "./utils/moveCheckLogic";

export default function App() {
  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
    // console.log(createBoard(boardSize));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnofFour(newBoard, boardSize, formulaForColumnofFour(boardSize));
      checkForRowofFour(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize, true)
      );
      isColumnofThree(newBoard, boardSize, formulaForColumnofThree(boardSize));
      checkForRowofThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}
