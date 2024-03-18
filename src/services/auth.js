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
