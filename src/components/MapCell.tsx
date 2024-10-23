import { MapId } from "../types/map";

export const MapCell = (
  mapId: MapId,
  goUp?: string
  //   goDown?: string,
  //   goLeft?: string,
  //   goRight?: string,
  //   visited?: boolean,
  //   exitUp?: boolean,
  //   exitDown?: boolean,
  //   content?: []
) => {
  return (
    <div>
      <h1>{mapId.id}</h1>
      <p>{goUp}</p>
    </div>
  );
};
