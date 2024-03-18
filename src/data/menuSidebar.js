import {
  faCalendarCheck,
  faChartPie,
  faFileInvoiceDollar,
  faHospitalUser,
  faUsers,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

export const menuSiderbar = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: faChartPie,
  },
  {
    name: "Pacientes",
    href: "/patient",
    icon: faHospitalUser,
  },
  {
    name: "Expedientes",
    icon: faFileMedical,
    subMenu: [
      {
        name: "Listado de Expedientes",
        href: "/record",
      },
      {
        name: "Agregar Expediente",
        href: "/record/create",
      },
    ],
  },
  {
    name: "Cargos",
    href: "/dashboard",
    icon: faFileInvoiceDollar,
  },
  {
    name: "Citas",
    icon: faCalendarCheck,
    subMenu: [
      {
        name: "Listado de Citas",
        href: "/appointment",
      },
      {
        name: "Agregar Cita",
        href: "/appointment/create",
      },
    ],
  },
  {
    name: "Usuarios",
    icon: faUsers,
    subMenu: [
      {
        name: "Listado de Usuarios",
        href: "/users",
      },
      {
        name: "Agregar Usuario",
        href: "/users/create",
      },
    ],
  },
];
