import { MapCell } from "../types/map";

interface MapProps {
  mapCells: MapCell[];
}

export const Map = ({ mapCells }: MapProps) => {
  return (
    <>
      {mapCells.length ? (
        mapCells.map((mapCell) => {
          return <div id={mapCell.mapId.id}>{mapCell.mapId.id}</div>;
        })
      ) : (
        <div>Nothing</div>
      )}
    </>
  );
};
