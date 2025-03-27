import ImageWithFallbacks from "@components/img/ImageWithFallback";
import HeroImages from "@img/kelas/Kelas-Hero.png";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[url('/Hero-BG.png')] h-[120vh] overflow-clip">
      <div className="containers flex justify-center items-center flex-col pt-[20%]">
        <div className="h-[50%] flex flex-col justify-center items-center">
          <h2 className="font-boldonse text-6xl font-bold bg-clip-text text-white/0 py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
            Ketahui lebih banyak edukasi
          </h2>
          <p className="text-3xl font-semibold italic">
            Dapatkan akses lebih dari{" "}
            <span className="bg-gray-800 text-white italic">
              2000+ konten edukasi
            </span>{" "}
            yang sesuai dengan minatmu!
          </p>
        </div>
        <ImageWithFallbacks
          source={HeroImages}
          width={1800}
          className="shadow-2xl rounded-2xl bg-gray-800 px-4 py-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
