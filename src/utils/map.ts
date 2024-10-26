import { IMapId, IMapCell } from "../types/map";

export const mapIdConstructor = (id: string) => {
  const mapId: IMapId = {
    id: id,
    world: id[0],
    xCoordinate: {
      name: id[1],
      coordinate: Number(id[2]),
    },
    yCoordinate: {
      name: id[3],
      coordinate: Number(id[4]),
    },
  };
  return mapId;
};

export const mapCellConstructor = (mapId: string) => {
  const _mapId = mapIdConstructor(mapId);
  const currentYCoordinate = _mapId.yCoordinate.coordinate;
  const currentXCoordinate = _mapId.xCoordinate.coordinate;

  const mapCell: IMapCell = {
    mapId: _mapId,
    goUp: `${_mapId.world}${_mapId.xCoordinate.name}${
      _mapId.xCoordinate.coordinate
    }${_mapId.yCoordinate.name}${_mapId.yCoordinate.coordinate + 1}`,

    goDown: `${_mapId.world}${_mapId.xCoordinate.name}${
      _mapId.xCoordinate.coordinate
    }${_mapId.yCoordinate.name}${Math.max(0, currentYCoordinate - 1)}`, // Ensure it doesn't go below 0

    goLeft: `${_mapId.world}${_mapId.xCoordinate.name}${Math.max(
      0,
      currentXCoordinate - 1
    )}${_mapId.yCoordinate.name}${currentYCoordinate}`, // Ensure it doesn't go below 0

    goRight: `${_mapId.world}${_mapId.xCoordinate.name}${
      _mapId.xCoordinate.coordinate + 1
    }${_mapId.yCoordinate.name}${_mapId.yCoordinate.coordinate}`,
  };
  return mapCell;
};
