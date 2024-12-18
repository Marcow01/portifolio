import React from 'react';
import { Button } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import MyPDF from '../assets/docs/MARCOSCORREA.pdf';

function Corpo() {
  return (
    <div className="mt-28 z-10">

      <p className="text-white text-5xl font-bold cursor-default">Welcome!</p>
      <p className="text-white text-3xl font-normal mt-2 cursor-default">I'm Marcos Corrêa</p>

      <div class="flex flex-2 mt-10">
        <div
          class="inline-block min-h-[1em] w-0.5 self-stretch bg-[#56ab2f] dark:bg-white/10">
        </div>
        <div className="text-white ml-4 corpo">
          <p class="text-white font-bold">About</p>
          <p class="text-white text-justify mt-2 mb-2">I'm a front-end developer with extensive experience in several areas of technology. I work on developing interactive applications with 3D objects and scenes, creating responsive, high-performance interfaces with minimalist design. I have expertise in database integrations, consumption and creation of APIs using Node.js, development of electronic projects with Arduino and ESP32, as well as technical drawing with CAD tools.</p>
          <a href={MyPDF} download="MARCOWCV.pdf" className='select-none'>
          <Button className=' mt-2 bg-[#56ab2f] mb-2'>
          <HiDownload className="mr-2 h-5 w-5" />
          Download CV
          </Button>
          </a>
          </div>
      </div>

    </div>
  );
}

export default Corpo;
