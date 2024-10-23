import { useEffect } from "react";

type PlayerProps = {
  children: React.ReactNode;
};

export const Player = ({ children }: PlayerProps) => {
  const playerController = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      console.log("up");
    }
    if (event.key === "ArrowDown") {
      console.log("down");
    }
    if (event.key === "ArrowLeft") {
      console.log("left");
    }
    if (event.key === "ArrowRight") {
      console.log("right");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", playerController);
    return () => {
      document.removeEventListener("keydown", playerController);
    };
  }, []);
  return <>{children}</>;
};
