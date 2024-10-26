export type IMapId = {
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

export type IMapCell = {
  mapId: IMapId;
  content?: IContent;
  goUp: string;
  goDown: string;
  goLeft: string;
  goRight: string;
  visited?: boolean;
  exitUp?: boolean;
  exitDown?: boolean;
};

export type IContent = {
  background: string;
  enemies?: [];
  items?: [];
  traps?: [];
};

export type MapCellData = {
  mapId: IMapId;
  content: IContent;
};
