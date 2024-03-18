"use client";
import Sidebar from "@/components/sidebar";
import SidebarMobile from "@/components/sidebar-mobile";
import AuthProvider from "@/providers/auth-provider";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isResponsive, setIsResponsive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AuthProvider>
      <Button
        onClick={() => setShowSidebar(!showSidebar)}
        isIconOnly
        color="secondary"
        variant="ghost"
        className="top-0 left-0 fixed z-10 m-3 flex lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <section className="w-full grid grid-cols-12">
        <Sidebar
          changeResponsive={() => setIsResponsive(!isResponsive)}
          isResponsive={isResponsive}
        />
        <SidebarMobile
          changeShow={() => setShowSidebar(!showSidebar)}
          showSidebar={showSidebar}
        />
        <div
          className={`w-full h-full ${
            isResponsive
              ? "col-span-11 lg:col-span-11"
              : "col-span-10 lg:col-span-10"
          } col-span-full`}
        >
          {children}
        </div>
      </section>
    </AuthProvider>
  );
}
