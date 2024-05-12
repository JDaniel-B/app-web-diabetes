import { create } from "@/services/medication";
import ButtonSubmit from "@/ui/button-submit";
import InputDisabled from "@/ui/input-disabled";
import InputValidator from "@/ui/input-validator";
import moment from "moment";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function CreateMedicationForm({ record }) {
  const [medicament, setMedicament] = useState({
    idRecord: "",
    name: "",
    days: "",
    hour: "",
    recommendations: "",
    date: moment().format(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await create(medicament);
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

  const handleChangeMedicament = (e) =>
    setMedicament({ ...medicament, [e.target.name]: e.target.value });

  useEffect(() => {
    medicament.idRecord = record?.id;
  }, [record]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto grid gap-y-4 gap-x-6 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-auto-row"
    >
      <InputDisabled label={"ID Expediente"} value={record?.id} />
      <InputDisabled label={"Paciente"} value={record?.paciente} />
      <InputValidator
        name={"name"}
        label={"Medicamento"}
        regex={/^[A-Za-záéíóúüñÑ\s]{5,100}$/}
        change={handleChangeMedicament}
      />
      <InputValidator
        name={"days"}
        label={"Numero de Dias"}
        regex={/^[0-9]$/}
        change={handleChangeMedicament}
      />
      <InputValidator
        name={"hour"}
        label={"Intervalo de tiempo"}
        regex={/^[0-9]$/}
        change={handleChangeMedicament}
      />
      <InputValidator
        name={"recommendations"}
        label={"Recomendaciones"}
        regex={/^[A-Za-záéíóúüñÑ\s]{0,100}$/}
        change={handleChangeMedicament}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Cargo"} />
      </div>
    </form>
  );
}

export default CreateMedicationForm;
