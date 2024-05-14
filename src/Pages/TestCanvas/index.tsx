function TestCanvas() {
  return (
    <div className="w-screen h-screen bg-night7 flex items-center justify-center">
      <div className="border-2 border-dashed border-white/50 w-[40rem] aspect-video rounded-xl flex items-center justify-center">
        <div className="bg-gradient-to-r from-white/80 to-white/20 text-transparent bg-clip-text animate-pulse text-xl">
          Canvas
        </div>
      </div>
    </div>
  );
}

export default TestCanvas;
