import { Tooltip } from "flowbite-react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Cabecalho() {
  return (
    <Navbar fluid rounded className="bg-transparent p-0 sm:p-0 select-none">
      <div className="flex md:order-2">
      <Tooltip content="sendme a message" animation="duration-500" placement="bottom"  style="light" arrow={false}>
        <a href="https://wa.me/9492080296" target="_blank"><Button className="bg-[#56ab2f]" data-tooltip-target="tooltip-animation">contact me</Button></a>
      </Tooltip>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white font-bold">
          home
        </NavbarLink>
        <NavbarLink href="#projetos" className="text-white font-normal">projects</NavbarLink>
        <NavbarLink href="#contato" className="text-white font-normal">contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Cabecalho
