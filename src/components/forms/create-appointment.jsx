import { create } from "@/services/appointment";
import ButtonSubmit from "@/ui/button-submit";
import InputDate from "@/ui/input-date";
import InputDisabled from "@/ui/input-disabled";
import moment from "moment";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function CreateAppointmentForm({ record }) {
  const [appointment, setappointment] = useState({
    idRecord: record?.id,
    date: "",
  });

  useEffect(() => {
    appointment.idRecord = record?.id;
  }, [record]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      async () => {
        const { isValid, message } = await create(appointment);
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
      <InputDisabled label={"ID Expediente"} value={record?.id} />
      <InputDisabled label={"Paciente"} value={record?.paciente} />
      <InputDate
        change={(e) => {
          let date = moment(e.target.value);
          const dateFormat = date.format("YYYY-MM-DD HH:mm:ss");
          setappointment({
            ...appointment,
            [e.target.name]: dateFormat,
          });
        }}
      />
      <div className="col-span-full flex justify-center items-center">
        <ButtonSubmit tittle={"Agregar Expediente"} />
      </div>
    </form>
  );
}

export default CreateAppointmentForm;
