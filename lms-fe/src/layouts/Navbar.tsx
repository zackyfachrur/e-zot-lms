import { useEffect, useState } from "react";
import Avatar from "@img/E-ZOT-Logo.png";
import NavbarLogo from "@img/E-ZOT-Logo.png";
import { User } from "@type/AuthType";

const Navbar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (authToken) {
      const [email] = atob(authToken).split(":");
      const user = users.find((user: User) => user.email === email);
      if (user) setUserName(user.namaLengkap);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    window.location.reload();
  };

  return (
    <nav className="w-full h-[80px] flex justify-center items-center py-4 fixed z-50 top-0">
      <div className="containers flex justify-between items-center bg-white border-2 border-gray-200 px-12 py-4 mt-4 rounded-full">
        <div className="flex gap-2 items-center">
          <a href="/">
            <img
              src={NavbarLogo}
              width={200}
              alt="Navbar Logo"
              className="flex"
            />
          </a>
          <ul className="flex gap-2 font-semibold text-gray-800 px-5">
            <li className="hover:underline-offset-2 decoration-transparent hover:decoration-gray-800 underline cursor-pointer decoration-4" onClick={() => window.location.assign("/kumpulan-kelas")}>
              Kelas
            </li>
            <li className="hover:underline-offset-2 decoration-transparent hover:decoration-gray-800 underline cursor-pointer decoration-4">
              Forum Kelas
            </li>
          </ul>
        </div>
        {/* Search Bar */}
        <div className="flex border-2 outline-none border-gray-200 gap-2 px-5 items-center rounded-full">
          <i className="ri-search-line text-gray-400"></i>
          <input
            type="text"
            className="outline-none py-2 font-medium w-[400px]"
            placeholder="Cari sumber belajar"
          />
          <div className="flex gap-1">
            <span className="text-[12px] px-1 text-gray-400 rounded-sm border">
              Ctrl
            </span>
            <span className="text-[12px] text-gray-400">+</span>
            <span className="text-[12px] text-gray-400 px-2 rounded-sm border">
              /
            </span>
          </div>
          <i className="ri-equalizer-2-line text-gray-400"></i>
        </div>
        <ul className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-3">
            {userName ? (
              <>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 font-semibold text-white bg-red-500 border-2 border-red-500 rounded-lg hover:bg-red-600"
                >
                  Log Out
                </button>
                <li className="cursor-pointer hover:text-gray-200">Kategori</li>
                <button
                  className="hover:text-gray-200"
                  onClick={() => window.location.assign("/buat-postingan")}
                >
                  Unggah Postingan
                </button>
                <img src={Avatar} alt="" />
              </>
            ) : (
              <>
                <a href="/auth/register">
                  <button className="px-5 py-2 font-semibold  text-white bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-900">
                    Daftar Akun
                  </button>
                </a>
                <a href="/auth/login">
                  <button className="px-5 py-2 font-semibold text-gray-800 bg-white rounded-lg cursor-pointer hover:bg-gray-50">
                    Masuk Akun
                  </button>
                </a>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
