import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const statusColorMap = {
  1: "success",
  0: "danger",
};

export const renderCell = (data, columnKey, update, changeStatus) => {
  const cellValue = data[columnKey];

  switch (columnKey) {
    case "estado":
      return (
        <Chip
          className="capitalize"
          color={statusColorMap[data.estado]}
          size="sm"
          variant="flat"
        >
          {cellValue == 1 ? "Activo" : "Inactivo"}
        </Chip>
      );

    case "actions":
      return (
        <div className="relative flex justify-start items-center gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <FontAwesomeIcon
                  className="w-4 h-4"
                  icon={faEllipsisVertical}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Actions" disallowEmptySelection>
              <DropdownItem
                onClick={() => update(data)}
                color="default"
                key={"update"}
              >
                Editar
              </DropdownItem>
              <DropdownItem
                onClick={() => changeStatus(data)}
                color="danger"
                key={"delete"}
              >
                Cambiar Estado
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return cellValue;
  }
};
