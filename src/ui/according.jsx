import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function According({ item }) {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="flex flex-col w-full text-sky-800">
      <Link
        className="cursor-pointer flex items-center p-2 gap-3 text-sky-800 rounded-lg hover:text-sky-500 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon className="h-5 w-5" icon={item.icon} />
        <span>{item.name}</span>
      </Link>
      <div>
        <ul
          className={`${
            isOpen ? "flex flex-col justify-between" : "hidden"
          } px-5 `}
        >
          {item.subMenu.map((item, index) => (
            <li className="py-1" key={index}>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  push(item.href);
                }}
                className="cursor-pointer"
                color="primary"
                underline="hover"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default According;
