import * as z from "zod";

export const registerAccountSchema = z
  .object({
    user_username: z
      .string()
      .min(3, "Minimal 3 karakter untuk Username")
      .max(30, "Maximal 30 karakter untuk Username"),
    user_firstname: z
      .string()
      .min(3, "Nama depan minimal 3 karakter")
      .max(30, "Maximal 30 karakter untuk Nama Depan"),
    user_lastname: z
      .string()
      .min(3, "Nama Belakang minimal 3 karakter")
      .max(30, "Maximal 30 karakter untuk Nama Belakang"),
    user_email: z.string().email("Format Email tidak Valid"),
    user_password: z.string().min(6, "Password minimal 6 karakter"),
    user_confirmPassword: z.string().min(6, "Password minimal 6 karakter"),
  })
  .refine((pass) => pass.user_password === pass.user_confirmPassword, {
    message: "Password tidak sesuai",
    path: ["user_confirmPassword"],
  });

export type RegisterAccountData = z.infer<typeof registerAccountSchema>;

export const loginAccountSchema = z
  .object({
    user_email: z.string().email("Format Email tidak Valid"),
    user_password: z.string().min(6, "Password minimal 6 karakter"),
    user_confirmPassword: z.string().min(6, "Password minimal 6 karakter"),
  })
  .refine((pass) => pass.user_password === pass.user_confirmPassword, {
    message: "Password tidak sesuai",
    path: ["user_confirmPassword"],
  });

export type LoginAccountData = z.infer<typeof loginAccountSchema>;

export type RegisterData = {
  data: RegisterAccountData[];
  loading: boolean;
  error?: string | null;
};

export type LoginData = {
  data: LoginAccountData[];
  loading: boolean;
  error?: string | null;
};

export interface InputComponentProps {
  labelContent: string;
  inputType: string;
  inputID: string;
  inputName: string;
  value: string;
  onChange: () => void;
}

export type User = {
  email: string;
  password?: string;
};
