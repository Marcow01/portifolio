import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Textarea, Label, TextInput } from "flowbite-react";
import { IoMdPerson } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

function Contato() {
  return (
    <div className="mt-64 w-full pb-44" id="contato">
      <p className="text-white text-5xl font-bold text-center cursor-default">Contact</p>

      <div class="flex flex-wrap -m-4 mt-8 text-white">
            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Send me a message, I am available to assist you in any way. I would be very happy :) to talk to you!</p>  
                  <a class="leading-relaxed mb-3 text-justify">© 2024 | Marcos</a>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <div class="py-3">
                <section>
                <div className="flex items-center py-1 rounded-lg mb-2 font-normal"><MdEmail /><a className="ml-2">marcowcorrea01@gmail.com</a></div>
                <div className=" flex items-center py-1 rounded-lg mb-2 font-normal"><IoLogoWhatsapp /><a className="ml-2"  href="https://wa.me/9492080296" target="_blank">(94) 99208-0296</a></div>
                <div className="flex items-center py-1 rounded-lg mb-2 font-normal"><FaLinkedinIn /><a className="ml-2" href="https://www.linkedin.com/in/marcos-corr%C3%AAa-885314211/" target="_blank">Marcos Vinícius</a></div>
                <div className="flex items-center py-1 rounded-lg mb-2 font-normal"><IoLogoGithub /><a className="ml-2"  href="https://github.com/marcow01" target="_blank">Marcow01</a></div>
                </section>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Contato;
