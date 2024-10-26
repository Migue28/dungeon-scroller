// import { Map } from "../components/map";
import { MapCanva } from "../components/map-canva";
import { PlayerProvider } from "../providers/player-provider";
// import { IMapCell } from "../types/map";
// import { mapCellConstructor } from "../utils/map";
import { MapCellView } from "./map-cell-view";

export const MapView = () => {
  // const map: IMapCell[] = [
  //   mapCellConstructor("ax1y1"),
  //   mapCellConstructor("ax2y1"),
  //   mapCellConstructor("ax3y1"),
  //   mapCellConstructor("ax4y1"),
  //   mapCellConstructor("ax4y2"),
  //   mapCellConstructor("ax4y3"),
  // ];

  return (
    <PlayerProvider>
      <MapCanva>
        {/* <Map mapCells={map} /> */}
        <MapCellView />
      </MapCanva>
    </PlayerProvider>
  );
};
