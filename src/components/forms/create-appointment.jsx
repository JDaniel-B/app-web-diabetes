import ButtonSubmit from "@/ui/button-submit";
import InputPhone from "@/ui/input-phone";
import InputValidator from "@/ui/input-validator";
import { useState } from "react";

function CreateAppointmentForm() {
  const [appointment, setappointment] = useState({
    
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto grid gap-y-4 gap-x-6 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-auto-row"
    >
      <InputValidator
        name={"CUI"}
        label={"CUI"}
        regex={/^[0-9]{13}$/}
        change={handleChantePatient}
      />
      <InputValidator
        name={"name"}
        label={"Nombre Paciente"}
        regex={/^[A-Za-záéíóúüñÑ\s]{5,50}$/}
        change={handleChantePatient}
      />
      <InputValidator
        name={"direction"}
        label={"Direccion"}
        regex={/^.{5,100}$/}
        change={handleChantePatient}
      />
      <InputPhone change={handleChantePatient} />
      <InputValidator
        name={"email"}
        label={"Correo Electronico"}
        regex={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i}
        change={handleChantePatient}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Cita"} />
      </div>
    </form>
  );
}

export default CreateAppointmentForm;
