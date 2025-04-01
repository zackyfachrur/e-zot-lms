import { zodResolver } from "@hookform/resolvers/zod";
import { LoginAccountData, loginAccountSchema } from "@type/AuthType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { LoginInputField } from "./InputField";
import { useForm } from "react-hook-form";
import useHandlePassword from "@services/HandlePassword";
import { AuthLogin } from "@store/AuthAsyncThunk";
import LoginHints from "./LoginHint";

export default function RegisterForm(){
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector(
    (state: RootState) => state.authentication
  );

  const {
    togglePassword,
    showPassword,
    eyePassword,
    eyeConfirmPassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useHandlePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginAccountData>({
    resolver: zodResolver(loginAccountSchema),
  });

  const onSubmit = (data: LoginAccountData) => {
    dispatch(AuthLogin(data));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl flex flex-col gap-2 w-[55%] text-white mx-auto p-4 "
      >
        <LoginInputField
          label="Email"
          name="user_email"
          type="email"
          icon={<i className="ri-mail-line px-2 py-2 font-semibold"></i>}
          placeholder="john@gmail.com"
          login={register}
          error={errors.user_email?.message}
        />
        <LoginInputField
          label="Password"
          name="user_password"
          icon={<i className="ri-lock-line px-2 py-2 font-semibold"></i>}
          placeholder="Ketik password kamu"
          type={showPassword}
          eye={
            <i
              className={`ri-${eyePassword}-line cursor-pointer`}
              onClick={() => togglePassword()}
            ></i>
          }
          login={register}
          error={errors.user_password?.message}
        />
        <LoginInputField
          label="Confirm Password"
          name="user_confirmPassword"
          icon={<i className="ri-lock-line px-2 py-2 font-semibold"></i>}
          placeholder="Konfirmasi password kamu"
          type={showConfirmPassword}
          eye={
            <i
              className={`ri-${eyeConfirmPassword}-line cursor-pointer`}
              onClick={() => toggleConfirmPassword()}
            ></i>
          }
          login={register}
          error={errors.user_confirmPassword?.message}
        />
        <button
          type="submit"
          className="w-full py-3 flex justify-center items-center bg-white text-gray-800 font-bold rounded-xl hover:bg-gray-200 cursor-pointer mt-2"
        >
          {loading === true ? <span className="loader"></span> : "Masuk Akun"}
        </button>
        <LoginHints />
      </form>
      {error && (
        <div className="flex flex-col place-content-center place-items-center fixed bg-gray-800 py-12 px-12 items-center h-[50%] w-[30%] rounded-xl">
          <p className="w-full px-5 py-2 rounded-lg text-xl font-bold text-center">
            {error}
          </p>
          <button
            type="button"
            onClick={() => window.location.assign("/auth/login")}
            className="w-full py-3 bg-white text-gray-800 font-bold rounded-xl hover:bg-gray-200 cursor-pointer mt-2"
          >
            Daftar Akun
          </button>
        </div>
      )}
    </>
  );
};

