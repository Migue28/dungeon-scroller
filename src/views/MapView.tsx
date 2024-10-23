import { Map } from "../components/Map";
import { MapCanva } from "../components/MapCanva";
import { MapCell } from "../types/map";
import { mapCellConstructor } from "../utils/map.";

export const MapView = () => {
  const map: MapCell[] = [
    mapCellConstructor("ax1y1"),
    mapCellConstructor("ax2y1"),
  ];

  return (
    <MapCanva>
      <Map mapCells={map} />
    </MapCanva>
  );
};
