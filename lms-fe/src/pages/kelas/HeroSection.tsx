// import ImageWithFallbacks from "@components/img/ImageWithFallback";
// import HeroImages from "@img/kelas/Kelas-Hero.png";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center items-center bg-no-repeat bg-cover bg-[url('./src/img/kelas/Kelas-Hero.png')] h-[100vh]">
      <div className="flex justify-end items-end w-full h-full flex-col">
        <span className="content-[''] w-[300px] h-[300px] bg-amber-300 absolute left-0 top-0 blur-[15rem]"></span>
        <div className="flex flex-col justify-end items-end bg-gray-800 px-8 py-4 rounded-tl-2xl">
          <h2 className="font-boldonse text-5xl py-4 font-bold bg-clip-text text-white/0 bg-gradient-to-r from-white to-gray-400 ">
            Ketahui lebih banyak edukasi
          </h2>
          <p className="text-xl font-semibold italic text-white">
            Dapatkan akses lebih dari{" "}
            <span className="bg-gray-800 text-white italic">
              2000+ konten edukasi
            </span>{" "}
            yang sesuai dengan minatmu!
          </p>
        </div>
        {/* <ImageWithFallbacks
          source={HeroImages}
          width={1800}
          className="shadow-2xl rounded-2xl bg-gray-800 px-4 py-4"
        /> */}
      </div>
    </section>
  );
};

