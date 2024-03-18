import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState, useMemo } from "react";

function DropdownSearch({ options, change, value = "" }) {
  const [selectedKeys, setSelectedKeys] = useState(value);

  const selectedValue = useMemo(() => Array.from(selectedKeys), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger className="hidden sm:flex">
        <Button
          endContent={<FontAwesomeIcon icon={faChevronDown} />}
          variant="flat"
        >
          Buscar por: {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Table Columns"
        closeOnSelect={false}
        selectedKeys={selectedKeys}
        selectionMode="single"
        onSelectionChange={(e) => {
          setSelectedKeys(e);
          change(e.currentKey);
        }}
      >
        {options.map((option) => (
          <DropdownItem
            key={option.uid}
            value={option.uid}
            className="capitalize"
          >
            {option.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownSearch;
