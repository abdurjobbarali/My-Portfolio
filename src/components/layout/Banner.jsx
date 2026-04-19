import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Image from "../common/Image";
import jo from "/src/assets/jo.png";

const Banner = () => {
  return (
    <div className="bg-[#0f172a] w-full py-10">
      <Container>
        <Flex>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            {/* Left Content */}
            <div className="text-center md:text-left max-w-xl">
              <h4 className="text-white font-bold text-[18px]">
                Hello My Name Is
              </h4>

              <h1 className="text-[28px] md:text-[40px] font-bold mt-2">
                <span className="text-teal-500">Abdur Jabbar</span>
              </h1>

              <h3 className="text-[18px] md:text-[22px] font-bold text-white mt-2">
                Frontend Developer
              </h3>

              <p className="text-[15px] md:text-[17px] text-white mt-4 leading-relaxed">
                I am a passionate Frontend Developer who loves building modern,
                responsive, and user-friendly websites. I focus on creating clean
                UI, smooth user experience, and interactive web applications.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 py-2 border-2 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Download CV
                </a>

                <a
                  href="/contact"
                  className="px-6 py-2 border-2 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-6 mt-6">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-[26px] hover:text-green-500 transition" />
                </a>

                <a
                  href="https://github.com/abdurjobbarali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-[26px] hover:text-green-500 transition" />
                </a>

                <a href="mailto:mdabdurjobbarali651268mail@gmail.com">
                  <IoMdMailOpen className="text-white text-[26px] hover:text-green-500 transition" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src={jo}
                className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-teal-500"
              />
            </div>

          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;