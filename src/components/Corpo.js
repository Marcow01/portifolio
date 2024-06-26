import Typed from 'typed.js';
import React from 'react';
import { Button } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import MyPDF from '../assets/docs/MARCOWCV.pdf';

function Corpo() {
  return (
    <div className="mt-28 z-10">

      <p className="text-white text-5xl font-bold cursor-default">Welcome!</p>
      <p className="text-white text-3xl font-normal mt-2 cursor-default">I'm Marcos Corrêa :)</p>

      <div class="flex flex-2 mt-10">
        <div
          class="inline-block min-h-[1em] w-0.5 self-stretch bg-[#56ab2f] dark:bg-white/10">
        </div>
        <div className="text-white ml-4 corpo">
          <p class="text-white font-bold">About</p>
          <p class="text-white text-justify mt-2 mb-2">Hello, I'm a web developer specializing in creating websites with modern design and solid programming. With application development with 3D objects and scenes, database integrations, minimalist and fast design, creation of APIs with NODEJS, electronic projects with Arduino and ESP32 and CAD drawings.</p>
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
