import { useCallback, useEffect, useState } from "react";
import { playerStartingPosition } from "../db/player-starting-position";
import { mapCellConstructor } from "../utils/map";

type PlayerProps = {
  children: React.ReactNode;
};

export const Player = ({ children }: PlayerProps) => {
  const [position, setPosition] = useState(playerStartingPosition);
  const positionCell = mapCellConstructor(position);

  const playerController = useCallback(
    (event: KeyboardEvent) => {
      const newPosition =
        event.key === "ArrowUp"
          ? positionCell.goUp
          : event.key === "ArrowDown"
          ? positionCell.goDown
          : event.key === "ArrowLeft"
          ? positionCell.goLeft
          : event.key === "ArrowRight"
          ? positionCell.goRight
          : position;

      // Update the position if it changed
      if (newPosition !== position) {
        setPosition(newPosition);
        console.log(`Player moved to: ${newPosition}`);
      }
    },
    [position, positionCell]
  );

  useEffect(() => {
    document.addEventListener("keydown", playerController);
    return () => {
      document.removeEventListener("keydown", playerController);
    };
  }, [playerController]);
  return <>{children}</>;
};
