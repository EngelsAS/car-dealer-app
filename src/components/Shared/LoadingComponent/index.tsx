const LoadingComponent = () => {
  return (
    <div className="flex gap-2">
      <div className="animate-bounce delay-500 w-5 h-5 bg-slate-950 rounded-full"></div>
      <div className="animate-[bounce_1s_infinite_100ms] w-5 h-5 bg-slate-950 rounded-full"></div>
      <div className="animate-[bounce_1s_infinite_200ms] w-5 h-5 bg-slate-950 rounded-full"></div>
    </div>
  );
};

export default LoadingComponent;
