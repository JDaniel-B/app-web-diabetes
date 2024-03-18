"use client";
import CreatePatientForm from "@/components/forms/create-patient";
import UpdatePatientForm from "@/components/forms/update-patient";
import { ModalBase } from "@/components/modal-base";
import TableAppointment from "@/components/tables/appointment";
import { useAuthContext } from "@/providers/auth-provider";
import { findByUser, find } from "@/services/appointment";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function PageAppointment() {
  const data = useAuthContext();
  const [appointments, setAppointments] = useState();
  const [appointment, setAppointment] = useState();

  const loadAppointments = async () => {
    const result = await find();
    setAppointments(result);
  };

  const loadByUser = async () => {
    const result = await findByUser();
    setAppointments(result);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-4">
      <TableAppointment
        data={appointments}
        add={() => console.log("object")}
        changeStatus={() => console.log("object")}
        update={() => console.log("object")}
      />
    </div>
  );
}

export default PageAppointment;
