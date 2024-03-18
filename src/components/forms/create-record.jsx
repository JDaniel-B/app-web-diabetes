import { create, getDiabetes } from "@/services/record";
import ButtonSubmit from "@/ui/button-submit";
import InputDate from "@/ui/input-date";
import InputDisabled from "@/ui/input-disabled";
import SelectOption from "@/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function CreateRecordForm({ user, patient }) {
  const [diabetes, setDiabetes] = useState();
  const [record, setRecord] = useState({
    idPatient: "",
    idUser: "",
    idDiabetes: "",
    date: "",
  });

  useEffect(() => {
    record.idPatient = patient?.id;
    record.idUser = user?.id;
  }, [user, patient]);

  const loadDiabetes = async () => {
    const result = await getDiabetes();
    setDiabetes(result);
  };

  useEffect(() => {
    loadDiabetes();
  }, []);

  const handleChangeRecord = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await create(record);
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
      <InputDisabled value={patient?.nombre} label={"Paciente"} />
      <InputDisabled value={patient?.nombre} label={"Telefono"} />
      <InputDisabled value={user?.nombre} label={"Usuario"} />
      <SelectOption
        name={"idDiabetes"}
        label={"Tipo de Diabetes"}
        options={diabetes}
        change={handleChangeRecord}
      />
      <InputDate value={record.date} change={handleChangeRecord} />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Expediente"} />
      </div>
    </form>
  );
}

export default CreateRecordForm;
