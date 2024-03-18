import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";

function InputSearch({ filterValue, onClear, onSearchChange, tittle }) {
  return (
    <Input
      isClearable
      className="w-[54%]"
      classNames={{
        input: ["text-base"],
      }}
      placeholder={`Buscar por ${tittle}...`}
      startContent={
        <FontAwesomeIcon className="w-5 h-5" icon={faMagnifyingGlass} />
      }
      value={filterValue}
      onClear={() => onClear()}
      onValueChange={onSearchChange}
    />
  );
}

export default InputSearch;
