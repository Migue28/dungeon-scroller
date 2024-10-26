import { useGetMapCellContent } from "../hooks/use-get-map-cell";
import { MapCell } from "../components/map-cell";
import { usePlayer } from "../hooks/use-player";
import { mapIdConstructor } from "../utils/map";

export const MapCellView = () => {
  const { position } = usePlayer();
  const { world, id: mapId } = mapIdConstructor(position);
  const { selectedMapCellContent } = useGetMapCellContent(world, mapId);

  return <MapCell mapId={mapId} content={selectedMapCellContent} />;
};
