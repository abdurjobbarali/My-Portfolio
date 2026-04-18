import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-[#0f172a] w-full">
      <Container>
        <Flex>
          <div className="py-8">
            <h4 className="text-white font-primary font-bold text-[20px]">
              Hello My Name is
            </h4>
            <h1 className="text-[30px] font-bold font-primary mt-2">
              <span className="text-teal-500">Abdur Jabbar</span>
            </h1>
            <h3 className="text-[20px] font-primary font-bold text-white mt-2">
              Frontend Developer
            </h3>
            <p className="text-[17px] w-127.5 text-white font-bold font-primary mt-4">
              I am a passionate Frontend Developer who loves building modern,
              responsive, and user-friendly websites. I focus on creating clean
              UI, smooth user experience, and interactive web applications using
              the latest technologies.
            </p>
            <div className="flex gap-x-8">
              {" "}
              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 mt-8 border-2 text-[15px] text-white rounded-lg hover:bg-green-600 transition"
              >
                Download CV
              </a>
              <a className="px-6 py-2 mt-8 border-2 text-[15px] text-white rounded-lg hover:bg-green-600 transition">
                Contact Me
              </a>
            </div>
            <div className="flex gap-x-8">
              <a
                href="https://www.linkedin.com/in/MD Abdur Jobbar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-[30px] mt-8" />
              </a>
              <a
                href="https://github.com/abdurjobbarali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-[30px] mt-8" />
              </a>
              <a href="mailto:mdabdurjobbarali651268mail@gmail.com">
                <IoMdMailOpen className="text-white text-[30px] mt-8" />
              </a>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
