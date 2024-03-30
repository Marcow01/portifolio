
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Cabecalho() {
  return (
    <Navbar fluid rounded className="bg-transparent p-0 sm:p-0 select-none">
      <div className="flex md:order-2">
        <Button className="bg-[#56ab2f]">contact me</Button>
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
