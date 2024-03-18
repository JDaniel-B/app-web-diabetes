import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";

function DropdownState({ statusFilter, setStatusFilter, statusOptions }) {
  return (
    <Dropdown>
      <DropdownTrigger className="hidden sm:flex">
        <Button
          endContent={<FontAwesomeIcon icon={faChevronDown} />}
          variant="flat"
        >
          Estado
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Table Columns"
        closeOnSelect={false}
        selectedKeys={statusFilter}
        selectionMode="multiple"
        onSelectionChange={(e) => setStatusFilter(e)}
      >
        {statusOptions.map((status) => (
          <DropdownItem
            key={status.uid}
            value={status.uid}
            className="capitalize"
          >
            {status.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownState;
