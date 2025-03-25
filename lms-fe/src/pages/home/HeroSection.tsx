import ImageWithFallbacks from "@components/img/ImageWithFallback";
import HeroImages from "@img/home/Hero-Images.png";
import ClientSwipers from "@components/swipers/ClientSwiper";

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col h-full pt-32">
        <span className="content-[''] w-[200px] h-[200px] absolute left-0 bg-blue-600 rounded-full blur-[8rem]"></span>
        <div className="containers bg-cover object-center flex justify-center items-center flex-col rounded-xl mt-20">
          <h1 className="text-5xl font-bold w-[80%] text-center font-boldonse">
            Revolusi Pembelajaran
          </h1>
          <p className="text-2xl font-bold mt-4">
            Temukan Ilmu Baru melalui Platform Video Interaktif!
          </p>
          <div className="flex flex-col items-center">
            <button className="text-xl bg-amber-300 hover:bg-amber-400 active:scale-95 cursor-pointer px-8 py-4 rounded-full font-bold text-white mt-6">
              Lihat Kategori Video <i className="ri-arrow-right-long-line"></i>
            </button>
            <span className="font-semibold text-gray-400 mt-2">
              Didukung oleh AI Assiten <i className="ri-robot-2-line"></i>
            </span>
          </div>
        </div>
        <ImageWithFallbacks source={HeroImages} width={1200} />
        <span className="content-[''] w-[200px] h-[200px] absolute right-0 bg-amber-300 rounded-full blur-[8rem]"></span>
        <ClientSwipers />
      </section>
    </>
  );
};

export default HeroSection;
