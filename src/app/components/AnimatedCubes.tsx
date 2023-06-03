const AnimatedCubes = () => {
  return (
    <div className="absolute flex items-center justify-center w-1 aspect-square left-[50%] translate-x-[50%] top-[50%] translate-y-[50%]">
      <div className="absolute w-[45rem] rounded-full aspect-square border border-white/5 animate-[ping_4.1s_ease-in-out_infinite]"></div>
      <div className="absolute w-[35rem] rounded-full aspect-square border border-white/5 animate-[ping_4.2s_ease-in-out_infinite]"></div>
      <div className="absolute w-[25rem] rounded-full aspect-square border border-white/5 animate-[ping_4.3s_ease-in-out_infinite]"></div>
      <div className="absolute w-[15rem] rounded-full aspect-square border border-white/5 animate-[ping_4.55s_ease-in-out_infinite]"></div>
      <div className="absolute w-[5rem] rounded-full aspect-square border border-white/5 animate-[ping_5s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default AnimatedCubes;
