import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";

function DropdownIcon({ item }) {
  return (
    <Dropdown className="group">
      <DropdownTrigger>
        <FontAwesomeIcon className="h-6 w-6" icon={item.icon} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {item.subMenu.map((data, index) => (
          <DropdownItem key={index}>{data.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownIcon;
