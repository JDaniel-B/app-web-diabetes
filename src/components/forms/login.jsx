import { Login } from "../../services/auth";
import ButtonSubmit from "@/ui/button-submit";
import InputEmail from "@/ui/input-email";
import InputPassword from "@/ui/input-password";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function LoginForm() {
  const { push } = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { auth, message } = await Login(user);
        if (auth) {
          push('/dashboard')
          return message;
        }
        throw new Error(message);
      },
      {
        error: (data) => `${data.message}`,
        success: (data) => `${data}`,
        loading: "Cargando...",
      }
    );
  };

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-5 justify-around items-center w-[100%] px-6">
      <InputEmail change={handleChangeUser} />
      <InputPassword change={handleChangeUser} />
      <ButtonSubmit tittle={"Iniciar Sesion"} />
    </form>
  );
}

export default LoginForm;
