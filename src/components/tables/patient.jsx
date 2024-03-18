import { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationTable from "../pagination";
import { patientColumns } from "@/data/patient-columns";
import { renderCell } from "../tables-cells/render-cell";
import SelectRows from "@/ui/select-rows";
import DropdownState from "@/ui/dropdown-status";
import InputSearch from "@/ui/input-search";
import Loading from "../loading";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const statusOptions = [
  { name: "Activo", uid: 1 },
  { name: "Inactivo", uid: 0 },
];

export default function TablePatient({
  data = [],
  add,
  update,
  changeStatus,
}) {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState("all");
  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...data];
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.estado)
      );
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
            tittle={"nombre"}
          />
          <div className="flex justify-center flex-wrap gap-3">
            <DropdownState
              setStatusFilter={setStatusFilter}
              statusFilter={statusFilter}
              statusOptions={statusOptions}
            />
            <Button
              color="primary"
              endContent={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => add()}
            >
              Agregar Paciente
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {data.length} Pacientes
          </span>
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
      <TableHeader columns={patientColumns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody loadingContent={<Loading />} items={items}>
        {(item) => (
          <TableRow key={item.id_paciente}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey, update, changeStatus)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
