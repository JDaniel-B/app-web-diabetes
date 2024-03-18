import { update } from "@/services/patient";
import ButtonSubmit from "@/ui/button-submit";
import InputPhoneUpdate from "@/ui/input-phone-update";
import InputUpdate from "@/ui/input-update";
import { useState } from "react";
import { toast } from "sonner";

function UpdatePatientForm({ data }) {
  const [patient, setPatient] = useState();

  const handleChantePatient = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await update(patient, data.id_paciente);
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
        name={"CUI"}
        defaultValue={data?.CUI}
        label={"CUI"}
        change={handleChantePatient}
      />
      <InputUpdate
        name={"name"}
        defaultValue={data?.nombre}
        label={"Nombre Paciente"}
        change={handleChantePatient}
      />
      <InputUpdate
        name={"direction"}
        defaultValue={data?.direccion}
        label={"Direccion"}
        change={handleChantePatient}
      />
      <InputPhoneUpdate
        defaultValue={data.telefono}
        change={handleChantePatient}
      />
      <InputUpdate
        name={"email"}
        defaultValue={data?.email}
        label={"Correo Electronico"}
        change={handleChantePatient}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Actualizar Paciente"} />
      </div>
    </form>
  );
}

export default UpdatePatientForm;
