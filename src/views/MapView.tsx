import { Map } from "../components/Map";
import { MapCanva } from "../components/MapCanva";
import { Player } from "../components/Player";
import { MapCell } from "../types/map";
import { mapCellConstructor } from "../utils/map.";

export const MapView = () => {
  const map: MapCell[] = [
    mapCellConstructor("ax1y1"),
    mapCellConstructor("ax2y1"),
    mapCellConstructor("ax3y1"),
    mapCellConstructor("ax4y1"),
    mapCellConstructor("ax4y2"),
    mapCellConstructor("ax4y3"),
  ];

  return (
    <Player>
      <MapCanva>
        <Map mapCells={map} />
      </MapCanva>
    </Player>
  );
};
