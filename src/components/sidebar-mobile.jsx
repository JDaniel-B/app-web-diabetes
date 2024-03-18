import { menuSiderbar } from "@/data/menuSidebar";
import { useAuthContext } from "@/providers/auth-provider";
import According from "@/ui/according";
import {
  faArrowRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  User,
  Button,
} from "@nextui-org/react";
import { useState, useEffect } from "react";

function SidebarMobile({ showSidebar, changeShow }) {
  const [translateClass, setTranslateClass] = useState("-translate-x-0");

  useEffect(() => {
    setTranslateClass(showSidebar ? "-translate-x-full" : "-translate-x-0");
  }, [showSidebar]);

  const { user } = useAuthContext();
  return (
    <div
      className={`top-0 fixed z-40 left-0 h-full w-full bg-gray-700/40 transition-transform lg:hidden ${translateClass}`}
    >
      <aside className={`h-full w-60 z-50`}>
        <div className="h-full flex flex-col items-start px-3 py-4 overflow-y-auto bg-slate-100 dark:bg-gray-800">
          <div className="flex justify-between items-center w-full gap-5 flex-row">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    style: { marginLeft: "5px" },
                    src: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
                    size: "sm",
                  }}
                  description={user?.rol}
                  name={user?.nombre}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings">My Settings</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              onClick={() => changeShow()}
              isIconOnly
              color="default"
              variant="faded"
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>

          <div className="flex flex-col flex-1 justify-between items-start w-full">
            <ul className="space-y-2 mt-3 font-medium">
              {menuSiderbar.map((item, index) =>
                item?.subMenu ? (
                  <According key={index} item={item} />
                ) : (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center p-2 text-sky-800 rounded-lg dark:text-white hover:text-sky-500 dark:hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon className="h-5 w-5" icon={item.icon} />
                      <span className="ms-3">{item.name}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
            <a
              href="#"
              className="flex items-center p-2 text-red-700 rounded-lg dark:text-white hover:text-red-400 dark:hover:bg-gray-700 group"
            >
              <FontAwesomeIcon
                className="h-5 w-5"
                icon={faArrowRightFromBracket}
              />
              <span className="ms-3">Cerrar Sesion</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SidebarMobile;
