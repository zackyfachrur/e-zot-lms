import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { ClientType } from "@type/ComponentType";

const ClientContent: React.FC<ClientType> = ({ content }) => {
  return (
    <div className="rounded-full px-4 text-sm flex justify-center py-4 text-gray-400 font-bold font-boldonse">
      {content}
    </div>
  );
};

const ClientSwipers = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      modules={[Autoplay, FreeMode]}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      freeMode={true}
      speed={8000}
      className="w-[100%] swiper-linear"
    >
      <SwiperSlide>
        <ClientContent content="AI Tutor Pintar" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="Rekomendasi Pembelajaran Adaptif" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="Asisten AI untuk Tanya Jawab" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="Forum Diskusi & Kolaborasi" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="Kelas Online & Webinar" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="AI Tutor Pintar" />
      </SwiperSlide>
      <SwiperSlide>
        <ClientContent content="Rekomendasi Pembelajaran Adaptif" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientSwipers;
