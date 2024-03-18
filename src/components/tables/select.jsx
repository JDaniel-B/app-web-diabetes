import { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  getKeyValue,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationTable from "../pagination";
import SelectRows from "@/ui/select-rows";
import InputSearch from "@/ui/input-search";
import Loading from "../loading";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DropdownSearch from "@/ui/dropdown-search";
import { userSelect } from "@/data/user-columns";

const options = [
  { name: "Nombre", uid: "nombre" },
  { name: "Telefono", uid: "telefono" },
];

export default function TableSelect({ data = [], add, select }) {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState("all");
  const hasSearchFilter = Boolean(filterValue);
  const [searchBy, setSearchBy] = useState("nombre");

  const filteredItems = useMemo(() => {
    let filteredUsers = [...data];
    if (hasSearchFilter) {
      if (searchBy == "nombre") {
        filteredUsers = filteredUsers.filter((user) =>
          user.nombre.toLowerCase().includes(filterValue.toLowerCase())
        );
      } else if (searchBy == "telefono") {
        filteredUsers = filteredUsers.filter((user) =>
          user.telefono.toString().includes(filterValue)
        );
      }
    }
    return filteredUsers;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-center sm:justify-between gap-3 items-end">
          <InputSearch
            filterValue={filterValue}
            onClear={() => {
              setFilterValue("");
              setPage(1);
            }}
            onSearchChange={onSearchChange}
            tittle={searchBy}
          />
          <div className="flex justify-center flex-wrap gap-3">
            <DropdownSearch
              change={(data) => setSearchBy(data)}
              value={searchBy}
              options={options}
            />
            <Button
              color="primary"
              endContent={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => add()}
            >
              Agregar
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center text-default-400 text-small">
            Filas Por Pagina:
            <SelectRows
              change={(e) => {
                setRowsPerPage(e.target.value);
                setPage(1);
              }}
            />
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, data.length, onSearchChange, hasSearchFilter]);

  return (
    <Table
      aria-labelledby="table-label"
      aria-label="Example table with client side pagination"
      isHeaderSticky
      color={"primary"}
      topContentPlacement="outside"
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[400px]",
      }}
      selectionMode="single"
      topContent={topContent}
      bottomContent={
        <PaginationTable page={page} pages={pages} setPage={setPage} />
      }
    >
      <TableHeader columns={userSelect}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody loadingContent={<Loading />} items={items}>
        {(item) => (
          <TableRow onClick={() => select(item)} key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
