"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import InputEmail from "@/ui/input-email";
import { recoveryPassword } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function ResetPasswordPage() {
  const { push } = useRouter();
  const [email, setEmail] = useState();

  const recovery = async () => {
    toast.promise(
      async () => {
        const { auth, message } = await recoveryPassword(email);
        if (auth) {
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

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-48 flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl">RECUPERACION DE CONTRASEÑA</h1>
        <InputEmail change={(e) => setEmail(e.target.value)} />
        <Button
          onClick={() => recovery()}
          color="primary"
          className="text-lg w-32"
        >
          Recuperar
        </Button>
        <Button
          onClick={() => push("/")}
          color="primary"
          className="text-lg w-32"
        >
          Volver
        </Button>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
