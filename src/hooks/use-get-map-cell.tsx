import { useState, useEffect } from "react";
import { MapCellData } from "../types/map";
import { mapIdConstructor } from "../utils/map";
import { worldStructure as ws } from "../db/world-structure";

type WorldStructure = { [key: string]: string[] };
const worldStructure: WorldStructure = ws;

// Helper function to dynamically import the map cell data
const loadMapCellData = async (
  world: string,
  mapId: string
): Promise<MapCellData | undefined> => {
  try {
    const module = await import(`../db/worlds/${world}/${mapId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load data for ${world}/${mapId}:`, error);
    return undefined;
  }
};

export const useGetMapCell = (world: string, mapId: string) => {
  const [selectedMapCellData, setSelectedMapCell] = useState<
    MapCellData | undefined
  >(undefined);

  useEffect(() => {
    const fetchMapCellData = async () => {
      const _mapId = mapIdConstructor(mapId);

      // Validate if the world exists in the world structure
      const worldMapIds = worldStructure[world];
      if (worldMapIds && worldMapIds.includes(_mapId.id)) {
        const data = await loadMapCellData(world, _mapId.id);
        setSelectedMapCell(data);
      } else {
        setSelectedMapCell(undefined);
      }
    };

    fetchMapCellData();
  }, [world, mapId]);

  return selectedMapCellData;
};
