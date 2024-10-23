type MapCanvaProps = {
  children: React.ReactNode;
};

export const MapCanva = ({ children }: MapCanvaProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="w-80 h-80 bg-slate-300">{children}</main>
    </div>
  );
};
