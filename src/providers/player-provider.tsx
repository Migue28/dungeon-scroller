// PlayerContext.tsx
import React, { createContext, useState, useCallback, useEffect } from "react";
import { playerStartingPosition } from "../db/player-starting-position";
import { mapCellConstructor } from "../utils/map";

type PlayerContextType = {
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
};

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <PlayerContext.Provider value={{ position, setPosition }}>
      {children}
    </PlayerContext.Provider>
  );
};
