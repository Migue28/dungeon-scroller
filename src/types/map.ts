export type MapId = {
  id: string;
  world: string;
  xCoordinate: {
    name: string;
    coordinate: number;
  };
  yCoordinate: {
    name: string;
    coordinate: number;
  };
};

export type MapCell = {
  mapId: MapId;
  goUp?: string;
  goDown?: string;
  goLeft?: string;
  goRight?: string;
  visited?: boolean;
  exitUp?: boolean;
  exitDown?: boolean;
  content?: [];
};
