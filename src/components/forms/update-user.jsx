import { getRoles, update } from "@/services/user";
import ButtonSubmit from "@/ui/button-submit";
import InputPhoneUpdate from "@/ui/input-phone-update";
import InputUpdate from "@/ui/input-update";
import SelectOption from "@/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function UpdateUserForm({ data }) {
  const [user, setUser] = useState();
  const [roles, setRoles] = useState();

  useEffect(() => {
    (async () => {
      const result = await getRoles();
      setRoles(result);
    })();
  }, []);

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await update(user, data.id_usuario);
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
      <InputUpdate
        name={"name"}
        defaultValue={data?.nombre}
        label={"Nombre"}
        change={handleChangeUser}
      />
      <InputPhoneUpdate
        defaultValue={data.telefono}
        change={handleChangeUser}
      />

      <InputUpdate
        name={"email"}
        defaultValue={data?.email}
        label={"Correo Electronico"}
        change={handleChangeUser}
      />
      <InputUpdate
        name={"password"}
        defaultValue={data?.password}
        label={"Contraseña"}
        change={handleChangeUser}
      />
      <SelectOption
        options={roles}
        label={"Rol"}
        name={"rol"}
        change={handleChangeUser}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Actualizar"} />
      </div>
    </form>
  );
}

export default UpdateUserForm;
