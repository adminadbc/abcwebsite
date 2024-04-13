"use client";

import React, { useState } from "react";

interface DropMenuProps {
  title: string;
  items: { name: string; href: string }[];
}

const DropMenu: React.FC<
  DropMenuProps & { isOpen: boolean; toggleDropdown: () => void }
> = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full  px-4 py-2 bg-white  font-medium"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up  ml-3 mt-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        ) : (
          <svg
            className="-mr-1 ml-2 mt-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      <div
        className={`absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${
          isOpen ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 block px-4 py-2 text-base"
              role="menuitem"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Custom: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (dropdownId: number) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="sm:flex sm:justify-center gap-4 sm:items-center">
      <DropMenu
        title="Resources"
        items={store[0].submenuItems}
        isOpen={openDropdown === 1}
        toggleDropdown={() => toggleDropdown(1)}
      />
      <DropMenu
        title="Initiatives"
        items={store[1].submenuItems}
        isOpen={openDropdown === 2}
        toggleDropdown={() => toggleDropdown(2)}
      />
    </div>
  );
};

export default Custom;

const store = [
  {
    name: "Resources",
    href: "/main/resources",
    submenu: true,
    submenuItems: [
      { name: "Education", href: "/main/resources/education" },
      { name: "Articles", href: "https://abc-blog-kit.vercel.app/" },
    ],
  },
  {
    name: "Initiatives",
    href: "/main/initiatives",
    submenu: true,
    submenuItems: [
      { name: "LegalConnect", href: "/main/initiatives/legal-connect" },
      { name: "Changemakers", href: "/main/initiatives/changemakers" },
    ],
  },
];
