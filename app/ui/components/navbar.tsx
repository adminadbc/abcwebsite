"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Navbar, Collapse, IconButton, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import SearchLayer from "./searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface DropMenuProps {
  title: string;
  items: { name: string; href: string }[];
}

const DropMenu: React.FC<
  DropMenuProps & { isOpen: boolean; toggleDropdown: () => void }
> = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div
      className="flex flex-col text-left"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div
        className="inline-flex justify-start w-full py-2 bg-white font-normal"
        aria-haspopup="true"
        {...(isOpen && { "aria-expanded": "true" })}
      >
        <h6 className="mr-3">{title}</h6>
      </div>
      {isOpen && (
        <div
          className="absolute md:mt-10 w-[200px] rounded-md shadow-lg mt-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-xl hover:text-abcf"
                role="menuitem"
              >
                <h6 className="hidden md:block">{item.name}</h6>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const links = [
  { name: "Home", href: "/main" },
  {
    name: "About Us",
    href: "/about",
    submenu: true,
    submenuItems: [
      { name: "Team", href: "/about/team" },
      { name: "Articles", href: "https://blog.abcfoundationconnect.com/" },
    ],
  },
  {
    name: "Advocacy",
    href: "/advocacy",
    submenu: true,
    submenuItems: [
      { name: "LAS", href: "/advocacy/legal-advocacy-and-support" },
      { name: "Engage", href: "/advocacy/engage" },
      { name: "Safe Spaces", href: "/advocacy/safe-spaces" },
      { name: "United Journeys", href: "/advocacy/united-journeys" },
      
    ],
  },
  {
    name: "Education",
    href: "/education",
    submenu: true,
    submenuItems: [
      {
        name: "LAP",
        href: "/education/legal-awareness-program",
      },
      { name: "Changemakers", href: "/education/changemakers" },
    ],
  },
  { name: "Contact Us", href: "/contacts" },
];

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (dropdownId: number) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const pathname = usePathname();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1060 && setOpen(false)
    );
  }, []);

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <Navbar
      fullWidth
      shadow={false}
      color="transparent"
      className={`absolute md:pl-0 lg:pl-0 z-50 border-0 bg-white text-black w-screen overflow-x-hidden-hidden transition-all duration-300 ${
        visible 
          ? 'fixed top-0 transform translate-y-0' 
          : 'transform -translate-y-full'
      }`}
    >
      <div className="container w-full mx-auto flex items-center justify-start h-18">
        <Link href="/main" className="flex items-center">
          <Image
            src="/newlogo.png"
            width={300}
            height={100}
            alt="ABC Foundation Logo"
            className="w-40 lg:w-56 h-auto object-contain"
          />
        </Link>

        <div className="mx-auto hidden items-center gap-6 xl:flex text-xl">
          {links.map((link, idx) => (
            <React.Fragment key={idx}>
              {link.submenu ? (
                <DropMenu
                  title={link.name}
                  items={link.submenuItems}
                  isOpen={openDropdown === idx}
                  toggleDropdown={() => toggleDropdown(idx)}
                />
              ) : (
                <Link
                  href={link.href}
                  className={clsx({
                    "bg-sky-100 text-abcf": pathname === link.href,
                  })}
                >
                  <h6 className="hidden md:block">{link.name}</h6>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="lg:mr-24 ml-[33%] md:ml-[65%] xl:ml-2">
          <SearchLayer />
        </div>
        <div className="hidden xl:flex">
          <Link
            href="https://donate.abcfoundationconnect.com/b/8wMaEK1aw8OGdj2144"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <Button className="bg-abcf text-black" size="lg">
              Donate
            </Button>
          </Link>
        </div>

        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block xl:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6 text-black mr-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-black mr-8" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900 text-lg">
            {links.map((link, idx) => (
              <li key={idx} className="hover:text-abcf">
                {link.submenu ? (
                  <>
                    <div
                      className="flex items-center justify-between"
                      onClick={() => toggleDropdown(idx)}
                    >
                      <h6>{link.name}</h6>
                      <FontAwesomeIcon
                        icon={openDropdown === idx ? faChevronUp : faChevronDown}
                        className="ml-2"
                      />
                    </div>
                    {openDropdown === idx && (
                      <ul className="mt-2 ml-4">
                        {link.submenuItems.map((subItem, subIdx) => (
                          <li key={subIdx} className="mt-2">
                            <Link href={subItem.href} onClick={handleMenuItemClick}>
                              <h6>{subItem.name}</h6>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={link.href} onClick={handleMenuItemClick}>
                    <h6>{link.name}</h6>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* <SearchLayer /> */}
          <Link 
            href="https://donate.abcfoundationconnect.com/b/8wMaEK1aw8OGdj2144"
            className="inline-block"
          >
            <Button className="bg-abcf mt-5 text-black" size="lg">
              Donate
            </Button>
          </Link>
          <div className="flex gap-4 mt-6">
            <Link
              href="https://www.facebook.com/ABCFoundationConnect/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-abcf"
            >
              <FaSquareFacebook size={30} />
            </Link>
            <a
              href="https://www.linkedin.com/company/advocacy-for-better-communities-foundation-abc-foundation/"
              title="social"
              target="_blank"
              rel="noopener"
              className="hover:text-abcf"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/the.abcfoundation/"
              title="social"
              target="_blank"
              rel="noopener"
              className="hover:text-abcf"
            >
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
