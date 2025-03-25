import { RegisterAccountData, LoginAccountData } from "@type/AuthType";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface RegisterInputFieldProps {
  label: string;
  type?: string;
  icon?: ReactNode;
  eye?: ReactNode;
  placeholder?: string;
  name: keyof RegisterAccountData;
  register: UseFormRegister<RegisterAccountData>;
  error?: string;
}

export interface LoginInputFieldProps {
  label: string;
  type?: string;
  icon?: ReactNode;
  eye?: ReactNode;
  placeholder?: string;
  name: keyof LoginAccountData;
  login: UseFormRegister<LoginAccountData>;
  error?: string;
}
