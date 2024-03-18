import { menuSiderbar } from "@/data/menuSidebar";
import { useAuthContext } from "@/providers/auth-provider";
import According from "@/ui/according";
import DropdownIcon from "@/ui/dropdown-icon";
import {
  faArrowRightFromBracket,
  faBars,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  User,
  Button,
  Tooltip,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

function Sidebar({ isResponsive, changeResponsive }) {
  const { push } = useRouter();
  const { user } = useAuthContext();
  return (
    <div
      className={`top-0 left-0 h-screen hidden relative lg:flex ${
        isResponsive ? "col-span-1" : "col-span-2"
      }`}
    >
      <aside className={`fixed h-screen`}>
        <div className="h-full flex flex-col items-start px-3 py-4 overflow-y-auto bg-slate-100 dark:bg-gray-800">
          <div
            className={`flex justify-between items-center w-full ${
              isResponsive ? "flex-col-reverse gap-5" : "flex-row gap-6"
            }`}
          >
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    style: { marginLeft: "5px" },
                    src: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
                    size: "sm",
                  }}
                  description={isResponsive ? "" : user?.rol}
                  name={isResponsive ? "" : user?.nombre}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings">My Settings</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              onClick={() => changeResponsive()}
              isIconOnly
              color="default"
              variant="faded"
            >
              <FontAwesomeIcon icon={isResponsive ? faBars : faBarsStaggered} />
            </Button>
          </div>

          <div className="flex flex-col flex-1 justify-between items-start w-full">
            <ul className="space-y-2 mt-3 font-medium">
              {menuSiderbar.map((item, index) =>
                item?.subMenu && isResponsive == false ? (
                  <According key={index} item={item} />
                ) : (
                  <li key={index}>
                    <Link
                      onClick={() => push(item.href)}
                      className="cursor-pointer flex items-center p-2 text-sky-800 rounded-lg dark:text-white hover:text-sky-500 dark:hover:bg-gray-700 group"
                    >
                      {isResponsive ? (
                        item?.subMenu ? (
                          <DropdownIcon item={item} />
                        ) : (
                          <Tooltip placement="right" content={item.name}>
                            <FontAwesomeIcon
                              className={`${
                                isResponsive ? "h-6 w-6" : "h-5 w-5"
                              } `}
                              icon={item.icon}
                            />
                          </Tooltip>
                        )
                      ) : (
                        <FontAwesomeIcon
                          className={`${isResponsive ? "h-6 w-6" : "h-5 w-5"} `}
                          icon={item.icon}
                        />
                      )}
                      {isResponsive ? null : (
                        <span className="ms-3">{item.name}</span>
                      )}
                    </Link>
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
              {isResponsive ? null : (
                <span className="ms-3">Cerrar Sesion</span>
              )}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
