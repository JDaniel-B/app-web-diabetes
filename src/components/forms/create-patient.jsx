import { create } from "@/services/patient";
import ButtonSubmit from "@/ui/button-submit";
import InputPhone from "@/ui/input-phone";
import InputValidator from "@/ui/input-validator";
import { useState } from "react";
import { toast } from "sonner";

function CreatePatientForm() {
  const [patient, setPatient] = useState({
    CUI: "",
    name: "",
    direction: "",
    phone: "",
    email: "",
  });

  const handelChangePatient = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await create(patient);
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
        name={"CUI"}
        label={"CUI"}
        regex={/^[0-9]{13}$/}
        change={handelChangePatient}
      />
      <InputValidator
        name={"name"}
        label={"Nombre Paciente"}
        regex={/^[A-Za-záéíóúüñÑ\s]{5,50}$/}
        change={handelChangePatient}
      />
      <InputValidator
        name={"direction"}
        label={"Direccion"}
        regex={/^.{5,100}$/}
        change={handelChangePatient}
      />
      <InputPhone change={handelChangePatient} />
      <InputValidator
        name={"email"}
        label={"Correo Electronico"}
        regex={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i}
        change={handelChangePatient}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Paciente"} />
      </div>
    </form>
  );
}

export default CreatePatientForm;
