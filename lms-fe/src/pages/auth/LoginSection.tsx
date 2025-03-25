import Navbar from "@layouts/Navbar";
import LoginForm from "./components/LoginForm";

const LoginSection = () => {
  return (
    <section className="flex flex-row items-center justify-around h-[100vh]">
      <Navbar />
      <div className="flex flex-col gap-2 w-full justify-center items-center h-full bg-gray-800">
        <div className="flex flex-col gap-1 w-full justify-center items-center">
          <h2 className="text-4xl font-bold text-white font-boldonse">
            Mulai Belajar Hari Ini!
          </h2>
          <p className="text-white font-semibold">
            Bergabung dengan{" "}
            <span className="text-amber-400 font-bold italic">E-ZOTLEARN</span>{" "}
            bersama mahasiswa lainnya.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginSection;
