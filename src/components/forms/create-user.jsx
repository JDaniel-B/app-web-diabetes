import { create, getRoles } from "@/services/user";
import ButtonSubmit from "@/ui/button-submit";
import InputPhone from "@/ui/input-phone";
import InputValidator from "@/ui/input-validator";
import SelectOption from "@/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function CreateUserForm() {
  const [roles, setRoles] = useState();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    rol: "",
  });

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    (async () => {
      const result = await getRoles();
      setRoles(result);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await create(user);
        if (isValid) {
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
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto grid gap-y-4 gap-x-6 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-auto-row"
    >
      <InputValidator
        name={"name"}
        label={"Nombre"}
        regex={/^([a-zA-Záéíóúñ]{1,50})(\s[a-zA-Záéíóúñ]{1,50})*$/}
        change={handleChangeUser}
      />
      <InputPhone change={handleChangeUser} />
      <InputValidator
        name={"email"}
        label={"Correo Electronico"}
        regex={
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }
        change={handleChangeUser}
      />
      <SelectOption
        options={roles}
        label={"Rol"}
        name={"rol"}
        change={handleChangeUser}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Usuario"} />
      </div>
    </form>
  );
}

export default CreateUserForm;
