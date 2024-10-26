import { useEffect } from "react";

import { useGetMapCellContent } from "../hooks/use-get-map-cell";
import { MapCell } from "../components/map-cell";
import { usePlayer } from "../hooks/use-player";
import { mapIdConstructor } from "../utils/map";

export const MapCellView = () => {
  const { position } = usePlayer();
  const { world, id: mapId } = mapIdConstructor(position);
  const { selectedMapCellContent } = useGetMapCellContent(world, mapId);

  // If you need to perform additional logic when `mapCellData` updates, use `useEffect`.
  useEffect(() => {
    if (selectedMapCellContent) {
      // Perform any additional logic here when `mapCellData` is updated.
    }
  }, [selectedMapCellContent]);
  return <MapCell mapId={mapId} content={selectedMapCellContent} />;
};
