import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { SiPhp, SiArduino, SiCplusplus, SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBadge3DFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiFastify } from "react-icons/si";
import { SiMongodb } from "react-icons/si"
import { SiTypescript } from "react-icons/si";
import { FiAlertTriangle } from "react-icons/fi";

function Projetos() {
  return (
    <div className="mt-48" id="projetos">
      <div className="text-white text-5xl font-bold cursor-default pt-24">Projects</div>

      <div class="flex flex-wrap -m-4 mt-8 text-white">
            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">December 2023</p>
                <a className="font-bold">TEKHNE SOLUTIONS</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Website presenting the digital construction service in a simplified manner, created to win over customers.</p>
                  <div className="flex mt-2 gap-2 flex-wrap">
                    <div className="bg-orange-400 flex items-center py-2 px-3 rounded-lg"><FaHtml5 /><a className="ml-2">HTML</a></div>
                    <div className="bg-orange-500 flex items-center py-2 px-3 rounded-lg"><IoLogoJavascript /><a className="ml-2">JavaScript</a></div>
                    <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><FaCss3 /><a className="ml-2">CSS</a></div>
                    <div className="bg-blue-700 flex items-center py-2 px-3 rounded-lg"><SiPhp /><a className="ml-2">PHP</a></div>
                  </div>
                  <div class="flex items-center flex-wrap text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold mt-4" target="_blank" href="https://tekhnesol.vercel.app/">see more
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>    
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">January 2024</p>
                <a className="font-bold">ACCESS CONTROL SYSTEM</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Development of a user management system integrated into a microcontrolled system by an ESP32 device connected to the internet, managed by the Firebase and Javascript database.</p>
                  <div className="flex mt-2 gap-2 flex-wrap mb-4">
                    <div className="bg-orange-500 flex items-center py-2 px-3 rounded-lg"><IoLogoJavascript /><a className="ml-2">JavaScript</a></div>
                    <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><SiCplusplus /><a className="ml-2">C++</a></div>
                    <div className="bg-orange-400 flex items-center py-2 px-3 rounded-lg"><FaHtml5 /><a className="ml-2">HTML</a></div>
                    <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><FaCss3 /><a className="ml-2">CSS</a></div>
                    <div className="bg-cyan-500 flex items-center py-2 px-3 rounded-lg"><SiArduino /><a className="ml-2">Arduino</a></div>
                    <div className="bg-orange-500 flex items-center py-2 px-3 rounded-lg"><SiFirebase /><a className="ml-2">Fisebase</a></div>
                  </div>

                  <div class="flex items-center flex-wrap text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold" target="_blank" href="https://www.canva.com/design/DAFkZt7QY3A/MA22B1RAuecn_BC87HCZoQ/view">see more
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>    
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -m-4 mt-8 text-white">
            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">April 2022</p>
                <a className="font-bold">RESISTOR APP CALCULATOR</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Electrical resistance calculator by colors and values, built with a 3D object for better visualization.</p>
                  <div className="flex mt-2 gap-2 flex-wrap">
                  <div className="bg-blue-400 flex items-center py-2 px-3 rounded-lg"><FaReact /><a className="ml-2">React</a></div>
              <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><FaCss3 /><a className="ml-2">CSS</a></div>
              <div className="bg-orange-400 flex items-center py-2 px-3 rounded-lg"><FaHtml5 /><a className="ml-2">HTML</a></div>
              <div className="bg-purple-600 flex items-center py-2 px-3 rounded-lg"><BsBadge3DFill /><a className="ml-2">Spline</a></div>
                  </div>
                  <div class="flex items-center flex-wrap text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold mt-4" target="_blank" href="https://resistor-app.vercel.app/">see more
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>    
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">February 2022</p>
                <a className="font-bold">CHAT APP</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Real-time chat built on Firebase and Reactjs database.</p>
                  <div className="flex mt-2 gap-2 flex-wrap mb-4">
                  <div className="bg-blue-400 flex items-center py-2 px-3 rounded-lg"><FaReact /><a className="ml-2">React</a></div>
                  <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><FaCss3 /><a className="ml-2">CSS</a></div>
                  <div className="bg-orange-400 flex items-center py-2 px-3 rounded-lg"><FaHtml5 /><a className="ml-2">HTML</a></div>
                  <div className="bg-orange-500 flex items-center py-2 px-3 rounded-lg"><SiFirebase /><a className="ml-2">Fisebase</a></div>
                  </div>

                  
                  <div class="flex items-center flex-wrap gap-2 text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold" target="_blank" href="">making adjustments
                    </a>
                    <FiAlertTriangle/>
                  </div>  
                </div>
              </div>
            </div>          
          </div>

          <div class="flex flex-wrap -m-4 mt-8 text-white">
            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">March 2021</p>
                <a className="font-bold">TLOU2 REMAKE WEBSITE</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">Development of a remake of the sales website for the electronic game THE LAST OF US 2 with a celebratory and minimalist style.</p>
                  <div className="flex mt-2 gap-2 flex-wrap">
                  <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><FaCss3 /><a className="ml-2">CSS</a></div>
              <div className="bg-orange-400 flex items-center py-2 px-3 rounded-lg"><FaHtml5 /><a className="ml-2">HTML</a></div>
              <div className="bg-orange-500 flex items-center py-2 px-3 rounded-lg"><IoLogoJavascript /><a className="ml-2">JavaScript</a></div>
                  </div>
                  <div class="flex items-center flex-wrap text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold mt-4" target="_blank" href="https://tlou2remake.vercel.app/">see more
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>    
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/2">
              <div class="rounded-lg overflow-hidden">
                <p className="text-gray-400 font-light text-xs">February 2024</p>
                <a className="font-bold">LUDO GAME</a>
                <div class="py-3">
                  <p class="leading-relaxed mb-3 text-justify">beginning of the creation of a multiplayer board game (ludo).</p>
                  <div className="flex mt-2 gap-2 flex-wrap mb-4">
                    <div className="bg-[#215732] flex items-center py-2 px-3 rounded-lg"><FaNodeJs /><a className="ml-2">NodeJs</a></div>
                    <div className="bg-[#4db33d] flex items-center py-2 px-3 rounded-lg"><SiMongodb /><a className="ml-2">Mongodb</a></div>
                    <div className="bg-blue-500 flex items-center py-2 px-3 rounded-lg"><SiTypescript /><a className="ml-2">Typescript</a></div>
                    <div className="bg-gray-800 flex items-center py-2 px-3 rounded-lg"><SiFastify /><a className="ml-2">Fastify</a></div>
                  </div>

                  <div class="flex items-center flex-wrap gap-2 text-[#56ab2f]">
                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-gray-500 font-bold" target="_blank" href="">in development
                    </a>
                    <FiAlertTriangle/>
                  </div>    
                </div>
              </div>
            </div>
          </div>
      
          <div className="mt-16 flex gap-1.5">
            <p className="text-white font-thin">and more on my github</p>
            <a className="flex items-center font-bold text-white" href="https://github.com/marcow01" target="_blank"><IoLogoGithub className="mr-1"/> Github</a>
          </div>
    </div>
  );
}

export default Projetos
