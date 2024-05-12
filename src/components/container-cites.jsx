import { Divider } from "@nextui-org/react";
import moment from "moment";
import React from "react";

function ContainerCites({ children, date }) {
  return (
    <div className="flex w-full flex-col justify-start items-start gap-3">
      <h1>{moment(date).format("dddd, Do MMMM YYYY")}</h1>
      <Divider />
      <div className="flex justify-start items-center w-full flex-wrap gap-8">
        {children}
      </div>
    </div>
  );
}

export default ContainerCites;
