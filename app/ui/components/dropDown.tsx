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
    <div
      className="flex flex-col text-left "
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div
        className="inline-flex justify-start w-full py-2 bg-white  font-normal"
        aria-haspopup="true"
        {...(isOpen && { "aria-expanded": "true" })}
      >
        <h6 className="mr-3">{title}</h6>
      </div>
      <div
        className={`absolute  md:mt-10 w-[200px]  rounded-md shadow-lg mt-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${
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
              className=" block px-4 py-2 text-base hover:text-abcf"
              role="menuitem"
            >
              <h6>{item.name}</h6>
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
    <div className="sm:flex    md:block xl:flex sm:justify-left -mt-2 xl:mt-0 lg:mb-0 z-[99] gap-4 sm:items-left">
      <DropMenu
        title="About Us"
        items={store[0].submenuItems}
        isOpen={openDropdown === 0}
        toggleDropdown={() => toggleDropdown(0)}
      />
      <DropMenu
        title="Resources"
        items={store[1].submenuItems}
        isOpen={openDropdown === 1}
        toggleDropdown={() => toggleDropdown(1)}
      />
      <DropMenu
        title="Initiatives"
        items={store[2].submenuItems}
        isOpen={openDropdown === 2}
        toggleDropdown={() => toggleDropdown(2)}
      />
    </div>
  );
};

export default Custom;

const store = [
  {
    name: "About",
    href: "/about",
    submenu: true,
    submenuItems: [
      { name: "Team", href: "/about/team" },
      { name: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    name: "Resources",
    href: "/main/resources",
    submenu: true,
    submenuItems: [
      { name: "Education", href: "/main/resources/education" },
      { name: "Articles", href: "https://blog.abcfoundationconnect.com/" },
    ],
  },
  {
    name: "Initiatives",
    href: "/education",
    submenu: true,
    submenuItems: [
      {
        name: "Legal Awareness Program",
        href: "/education/legal-awareness-program",
      },
      { name: "Changemakers", href: "/education/changemakers" },
    ],
  },
];
