"use client";
import CardCites from "@/components/card-cites";
import ContainerCites from "@/components/container-cites";
import Wait from "@/components/wait";
import { findFuture } from "@/services/appointment";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [headerCites, setHeaderCites] = useState([]);
  const [detailCites, setDetailCites] = useState();

  const loadCites = async () => {
    const { header, detail } = await findFuture();
    setHeaderCites(header);
    setDetailCites(detail);
  };

  useEffect(() => {
    loadCites();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-start items-start p-10 gap-3 sm:gap-12">
      {headerCites.length > 0 ? (
        headerCites.map((header, index) => (
          <ContainerCites date={header?.fecha} key={index}>
            {detailCites.map((detail, index) =>
              detail.fecha == header.fecha ? (
                <CardCites data={detail} key={index} />
              ) : null
            )}
          </ContainerCites>
        ))
      ) : (
        <Wait />
      )}
    </div>
  );
}

export default DashboardPage;
