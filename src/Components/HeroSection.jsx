const HeroSection = () => {
  return (
    <section className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fed766"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
        <p className="text-5xl">31&deg;</p>
        <p className="text-[1rem]">27&deg;</p>
      </div>
      <div className="my-4">
        <p>Fair</p>
        <p>2% chance of rain through 9PM</p>
      </div>
    </section>
  );
};

export default HeroSection;
