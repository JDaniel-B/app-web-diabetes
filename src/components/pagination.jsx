import React from "react";
import { Pagination } from "@nextui-org/react";

function PaginationTable({ page, pages, setPage }) {
  return (
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={page}
        total={pages}
        onChange={setPage}
      />
    </div>
  );
}

export default PaginationTable;
