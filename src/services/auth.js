import axios from "axios";
import { toast } from "sonner";
import { options } from "./options";

export const Login = async (datos) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/auth/login`,
      datos,
      options
    );
    return { auth: data.auth, message: data.message };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const recoveryPassword = async (datos) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/auth/reset-password`,
      { email: datos },
      options
    );
    return { auth: data?.auth, message: data?.message };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const logout = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/auth/logout`,
      options
    );
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};
