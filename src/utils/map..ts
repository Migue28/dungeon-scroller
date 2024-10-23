import { MapId, MapCell } from "../types/map";

export const mapIdConstructor = (id: string) => {
  const mapId: MapId = {
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
  const mapCell: MapCell = {
    mapId: _mapId,
    goUp: `${_mapId.world}${_mapId.xCoordinate.name}${
      _mapId.xCoordinate.coordinate + 1
    }${_mapId.yCoordinate.name}${_mapId.yCoordinate.coordinate}`,
  };
  return mapCell;
};
