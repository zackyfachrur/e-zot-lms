const RegisterHints = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full">
        <hr className="w-full text-gray-400" />
        <p className="w-[800px] text-center text-gray-400 font-semibold">
          Atau lanjutkan dengan
        </p>
        <hr className="w-full text-gray-400" />
      </div>
      <div className="flex gap-2 font-semibold">
        <button className="px-5 py-2 border-2 border-gray-600 rounded-lg w-full cursor-pointer hover:bg-white hover:text-slate-800">
          <i className="ri-google-fill"></i> Google
        </button>
        <button className="px-5 py-2 border-2 border-gray-600 rounded-lg w-full cursor-pointer hover:bg-white hover:text-slate-800">
          <i className="ri-github-fill"></i> Github
        </button>
      </div>
      <h3 className="self-center font-medium">
        Sudah punya akun ?{" "}
        <a
          href="/auth/login"
          className="font-bold hover:underline hover:decoration-2 hover:decoration-amber-300"
        >
          Masuk Akun
        </a>
      </h3>
    </>
  );
};

export default RegisterHints;
