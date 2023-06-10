const TestComponent = () => {
  return (
    <ul className="w-[30rem] mx-auto h-[60rem] bg-slate-700 mb-[40rem] overflow-y-auto snap-y snap-mandatory">
      <li className="sticky top-0 bg-orange-900 h-[3rem]"></li>
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i} className="h-full bg-red-800 mb-[1rem] snap-center"></li>
      ))}
    </ul>
  );
};

export default TestComponent;
