import {
  RegisterInputFieldProps,
  LoginInputFieldProps,
} from "@type/InputFieldType";

export const RegisterInputField: React.FC<RegisterInputFieldProps> = ({
  label,
  type = "text",
  name,
  register,
  error,
  placeholder,
  icon,
  eye,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-md font-medium">
          {label}
        </label>
      </div>
      <div className="flex gap-1 items-center w-full bg-gray-600 rounded-md border border-gray-500 font-medium px-2">
        {icon}
        <input
          {...register(name)}
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full py-2 bg-transparent outline-none"
        />
        {eye}
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export const LoginInputField: React.FC<LoginInputFieldProps> = ({
  label,
  type = "text",
  name,
  login,
  error,
  placeholder,
  icon,
  eye,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-md font-medium">
          {label}
        </label>
      </div>
      <div className="flex gap-1 items-center w-full bg-gray-600 rounded-md border border-gray-500 font-medium px-2">
        {icon}
        <input
          {...login(name)}
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full py-2 bg-transparent outline-none"
        />
        {eye}
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};
