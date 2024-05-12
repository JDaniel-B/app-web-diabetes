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

export const renderCellRecord = (
  data,
  columnKey,
  update,
  changeStatus,
  viewDetail
) => {
  const cellValue = data[columnKey];

  switch (columnKey) {
    case "estado":
      return (
        <Chip
          className="capitalize"
          color={cellValue == 1 ? "success" : "danger"}
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
              <DropdownItem onClick={() => viewDetail(data)} color="default">
                Ver Detalles
              </DropdownItem>
              {data?.estado == 0 ? null : (
                <DropdownItem onClick={() => update(data)} color="default">
                  Editar
                </DropdownItem>
              )}
              {data?.estado == 0 ? null : (
                <DropdownItem onClick={() => changeStatus(data)} color="danger">
                  Cambiar Estado
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return cellValue;
  }
};
