import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/products/cart" },
  { name: "About Us", path: "/about-us" },
  { name: "Manage Product", path: "/products/management" },
];

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((link) => (
        <li key={link.name} className="p-1 font-medium">
          <NavLink
            to={link.path}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="bg-[#1a1c1cfd]">
      <Navbar
        className="mx-auto max-w-[1200px] bg-transparent border-0 px-0  w-full py-3"
        placeholder="" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <div className="flex items-center justify-between text-[#FFFFFF]">
          <NavLink
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl flex items-center gap-2"
          >
            <p>FlexFitHub</p>
            <img className="size-6" src={logo} alt="" />
          </NavLink>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder="" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
