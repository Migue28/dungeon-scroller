import { useState, useEffect } from "react";
import { IContent } from "../types/map";
import { worldStructure as ws } from "../db/world-structure";

// Define the type for the world structure to keep it consistent.
type WorldStructure = { [key: string]: string[] };
const worldStructure: WorldStructure = ws;

// Helper function to dynamically import the map cell data.
const loadMapCellData = async (
  world: string,
  mapId: string
): Promise<IContent | undefined> => {
  try {
    const module = await import(`../db/worlds/${world}/${mapId}.ts`);
    const { data } = await module;
    return data;
  } catch (error) {
    console.error(`Failed to load data for ${world}/${mapId}:`, error);
    return undefined;
  }
};

// Custom hook to get the content of a map cell.
export const useGetMapCellContent = (world: string, mapId: string) => {
  const [selectedMapCellContent, setSelectedMapCellContent] = useState<
    IContent | undefined
  >(undefined);

  useEffect(() => {
    const fetchMapCellData = async () => {
      // Validate if the world exists in the world structure and the mapId is valid.
      const worldMapIds = worldStructure[world];
      if (worldMapIds?.includes(mapId)) {
        const data = await loadMapCellData(world, mapId);
        if (data) {
          setSelectedMapCellContent(data);
        } else {
          console.warn(`Data for ${world}/${mapId} is undefined.`);
          setSelectedMapCellContent(undefined);
        }
      } else {
        console.warn(`Map ID ${mapId} not found in world ${world}`);
        setSelectedMapCellContent(undefined);
      }
    };

    fetchMapCellData();
  }, [world, mapId]);

  return { selectedMapCellContent };
};
