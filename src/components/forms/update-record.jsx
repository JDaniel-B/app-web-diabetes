import { getDiabetes, update } from "@/services/record";
import ButtonSubmit from "@/ui/button-submit";
import InputDate from "@/ui/input-date";
import SelectOption from "@/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function UpdateRecordForm({ data }) {
  const [record, setRecord] = useState();
  const [diabetes, setDiabetes] = useState();

  useEffect(() => {
    (async () => {
      const result = await getDiabetes();
      setDiabetes(result);
    })();
  }, []);

  const handleChangeRecord = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await update(record, data?.id_expediente);
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
      <SelectOption
        name={"idDiabetes"}
        label={"Tipo Diabetes"}
        options={diabetes}
        change={handleChangeRecord}
      />
      <InputDate
        name={"date"}
        value={data?.fecha}
        change={handleChangeRecord}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Actualizar"} />
      </div>
    </form>
  );
}

export default UpdateRecordForm;
