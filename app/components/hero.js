export default function Hero() {
  return (
    <>
      <div className="p-4 md:p-8 md:flex-row flex flex-col gap-8 md:gap-16 items-center">
        <img
          className="hero-img-item shadow-xl"
          src="HeroImage.png"
          alt="Ceejay Xiong"
        ></img>
        <div className="self-center">
          <p className="text-7xl md:text-9xl">Hello!</p>
          <p className="text-4xl md:text-6xl">
            I'm <span className="text-blue-600 ">Ceejay</span>, a Software
            Engineer based in Chicago.
          </p>
        </div>
      </div>
    </>
  );
}
