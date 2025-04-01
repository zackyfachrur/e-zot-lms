import RegisterForm from "./components/RegisterForm";
// import BrandLogo from "/E-ZOT-Logo.png";
import Navbar from "@layouts/Navbar";

export default function RegisterSection() {
  return (
    <section className="flex flex-row items-center justify-around h-[100vh]">
      <Navbar />
      {/* <div className="bg-white h-full flex-col w-[50%] flex justify-center items-center">
        <div className=" flex-col w-[70%] h-[50%] flex gap-4 justify-center items-center rounded-xl px-24">
          <img src={BrandLogo} alt="Brand Icon" className="w-[400px]" />
          <p className="text-gray-800 font-semibold">
            50+ mahasiswa telah bergabung dengan{" "}
            <span className="text-amber-400 font-bold italic">E-ZOTLEARN</span>
            <br />
            ini saatnya untuk kamu mendapatkan alur belajarmu disini.
          </p>
          <button className="bg-gray-800 px-8 py-4 hover:bg-gray-900 w-full text-white rounded-xl font-bold cursor-pointer">
            Konsultasi Gratis
          </button>
        </div>
      </div> */}
      <div className="flex gap-2 w-full justify-center items-center h-full bg-gray-800">
        <div className="containers flex flex-col">
          <div className="flex flex-col gap-1 w-full mt-12 justify-center items-center">
            <h2 className="text-4xl font-bold text-white font-boldonse">
              Mulai Belajar Hari Ini!
            </h2>
            <p className="text-white font-semibold">
              Bergabung dengan{" "}
              <span className="text-amber-400 font-bold italic">
                E-ZOTLEARN
              </span>{" "}
              bersama mahasiswa lainnya.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

