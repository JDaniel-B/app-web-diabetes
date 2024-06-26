import { create, getDiabetes, replace } from "@/services/record";
import ButtonSubmit from "@/ui/button-submit";
import InputDate from "@/ui/input-date";
import InputDisabled from "@/ui/input-disabled";
import SelectOption from "@/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

function CreateRecordForm({ user, patient }) {
  const [diabetes, setDiabetes] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, message, isExist } = await create(record);
    if (isExist) {
      setMessage(message);
      return setOpenModal(true);
    }
    if (isValid) {
      return toast.success(message);
    } else {
      return toast.error(message);
    }
  };

  const replaceRecord = async () => {
    const { isValid, message, isExist } = await replace(record);
    if (isExist) {
      return toast.error(message);
    }
    if (isValid) {
      return toast.success(message);
    } else {
      return toast.error(message);
    }
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
      <Modal
        isDismissable={false}
        placement="center"
        hideCloseButton={true}
        isOpen={openModal}
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="flex text-2xl flex-col gap-1 items-center text-center">
            {message}
          </ModalHeader>
          <ModalBody>
            <div className="flex justify-center items-center gap-5 px-5">
              <Button
                color="primary"
                variant="ghost"
                className="w-12"
                onClick={() => {
                  replaceRecord();
                  setOpenModal(false);
                }}
              >
                Si
              </Button>
              <Button
                variant="ghost"
                color="danger"
                className="w-12"
                onClick={() => setOpenModal(false)}
              >
                No
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default CreateRecordForm;
