import { IContent } from "../types/map";

type MapCellProps = {
  mapId: string;
  content?: IContent | undefined;
};

export const MapCell = ({ mapId, content }: MapCellProps) => {
  const imgUrl = content?.background || "";
  return (
    <div className="relative w-full h-full">
      <img
        id={mapId}
        src={imgUrl}
        alt={mapId}
        className="w-full h-full object-cover"
      />
      <p className="absolute top-0 left-0 p-2 text-white bg-black bg-opacity-50">
        {mapId}
      </p>
    </div>
  );
};
