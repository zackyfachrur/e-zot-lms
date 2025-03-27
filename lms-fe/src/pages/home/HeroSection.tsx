import ImageWithFallbacks from "@components/img/ImageWithFallback";
import HeroImages from "@img/home/Hero-Images.png";
import ClientSwipers from "@components/swipers/ClientSwiper";

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-row pt-12 pb-24 bg-[url('/Hero-BG.png')] h-[95vh]">
        <span className="content-[''] w-[200px] h-[200px] absolute left-0 bg-blue-600 rounded-full blur-[8rem]"></span>
        {/* Wrapper */}
        <div className="containers bg-cover object-center flex justify-between items-center flex-row rounded-xl mt-20">
          <div className="w-[50%] flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold w-[80%] font-boldonse">
              Revolusi Pembelajaran
            </h1>
            <p className="text- font-bold mt-4">
              Temukan Ilmu Baru melalui Platform Video Interaktif!
            </p>
            <span className="font-semibold text-gray-400 mt-2">
              Didukung oleh AI Assiten <i className="ri-robot-2-line"></i>
            </span>
            <div className="flex flex-col items-center">
              <button className=" bg-amber-300 hover:bg-amber-400 active:scale-95 cursor-pointer px-8 py-2 font-bold text-white mt-2">
                Lihat Kategori Video{" "}
                <i className="ri-arrow-right-long-line"></i>
              </button>
            </div>
          </div>
          <ImageWithFallbacks
            source={HeroImages}
            width={800}
            className="rounded-2xl px-4 py-4 bg-gradient-to-l from-white/80 to-white/10"
          />
        </div>
        {/* End Wrapper */}
        <span className="content-[''] w-[200px] h-[200px] absolute right-0 bg-amber-300 rounded-full blur-[8rem]"></span>
      </section>
      <ClientSwipers />
    </>
  );
};

export default HeroSection;
