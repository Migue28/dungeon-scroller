import { useState, useEffect } from "react";
import { IContent } from "../types/map";
import { worldStructure as ws } from "../db/world-structure";

type WorldStructure = { [key: string]: string[] };
const worldStructure: WorldStructure = ws;

// Helper function to dynamically import the map cell data
const loadMapCellData = async (
  world: string,
  mapId: string
): Promise<IContent | undefined> => {
  try {
    const module = await import(`../db/worlds/${world}/${mapId}.ts`);
    // Check if the module has a `default` export.
    const data = module.default ? module.default : module;
    return data;
  } catch (error) {
    console.error(`Failed to load data for ${world}/${mapId}:`, error);
    return undefined;
  }
};

export const useGetMapCellContent = (world: string, mapId: string) => {
  const [selectedMapCellContent, setSelectedMapCellContent] = useState<
    IContent | undefined
  >(undefined);

  useEffect(() => {
    const fetchMapCellData = async () => {
      // Validate if the world exists in the world structure
      const worldMapIds = worldStructure[world];
      if (worldMapIds && worldMapIds.includes(mapId)) {
        const data = await loadMapCellData(world, mapId);
        setSelectedMapCellContent(data);
      } else {
        setSelectedMapCellContent(undefined);
      }
    };

    fetchMapCellData();
  }, [world, mapId]);

  return { selectedMapCellContent };
};
