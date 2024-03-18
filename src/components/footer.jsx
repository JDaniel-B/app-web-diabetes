import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@nextui-org/react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg z-40 realtive bottom-0 w-full shadow dark:bg-gray-900">
      <div className="w-full mx-auto px-7 md:py-3">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex gap-1 items-center text-red-400 mb-4 sm:mb-0"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Control Diabetes
            </span>
            <FontAwesomeIcon
              className="w-[18px] h-[18px]"
              icon={faFileWaveform}
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Divider />
        <span className="block text-sm py-1 text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Diabetes™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
