import FooterLogo from "@img/E-ZOT-Logo.png";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center mt-24 h-[80vh] drop-shadow-2xl">
        <div className="flex justify-around w-full p-24 mt-24 bg-white item-center rounded-t-4xl">
          {/* Col 1 */}
          <div className="w-[500px]">
            <img src={FooterLogo} alt="Footer Logo" width={200} />
            <div className="flex flex-col mt-4">
              <h3 className="text-base font-bold">
                Gali Potensi Anda Melalui E-ZOTLEARN
              </h3>
              <p className="font-semibold text-gray-500">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="font-semibold text-gray-500">+62-877-7123-1234</p>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex gap-12">
            <ul className="flex flex-col gap-2">
              <h3 className="font-bold">Kategori</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Digital & Teknologi
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Pemasaran
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Manajemen Bisnis
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Pengembangan Diri
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Desain
                </a>
              </li>
            </ul>
            <ul>
              <h3 className="font-bold">Perusahaan</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Bantuan
                </a>
              </li>
            </ul>
            <ul>
              <h3 className="font-bold">Komunitas</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Tips Sukses
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full border-t-2 border-gray-200 bg-white">
          <span className="mb-12 font-semibold text-gray-500">
            © {new Date().getFullYear()} Zacky Fachrur All Rights Reserved.
          </span>
          <h2 className="text-9xl font-boldonse">E-ZOT LEARN</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
