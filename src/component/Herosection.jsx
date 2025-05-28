

function HeroSection() {
  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <img
        src="/docter.png"
        alt="Hospital Staff"
        className="w-full h-full object-cover rounded-b-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-bold">Hospital Search</h2>
        <div className="mt-2 text-sm">
          <span className="text-gray-300">Home</span> /{" "}
          <span className="text-emerald-400">Hospital Search</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

