import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { MdCheckCircleOutline } from "react-icons/md";

const About = () => {
  return (
    <div className="py-12 bg-[#0f172a] w-full">
      <Container>
        <Flex className="flex flex-col lg:flex-row items-center justify-between gap-10">

     
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-white font-bold text-[18px] mb-2">
              More About
            </h3>

            <h4 className="text-[#a78bfa] font-bold text-[26px] md:text-[32px] leading-tight">
              I am Frontend Developer with React
            </h4>

            <p className="text-[15px] md:text-[17px] text-gray-300 mt-5 leading-relaxed">
              I am a dedicated Frontend Developer with strong expertise in
              React.js and modern web technologies. I specialize in developing
              responsive, accessible, and high-performance user interfaces.
            </p>

            <h3 className="text-white font-bold text-[24px] mt-6">
              Education
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MdCheckCircleOutline className="text-[#22c55e] text-xl mt-1" />
                <p className="text-white text-[15px]">
              I am a Student at Munshigonj Polytechnic Institute (4-year diploma)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MdCheckCircleOutline className="text-[#22c55e] text-xl mt-1" />
                <p className="text-white text-[15px]">
                 I am studying Creative IT Institute
                </p>
              </div>
            </div>
          </div>

        
          <div className="w-full lg:w-1/2">
            <div className="bg-[#1e293b] text-white p-5 md:p-8 rounded-2xl font-mono shadow-2xl border border-slate-700/50 overflow-x-auto">
              <pre className="text-[13px] md:text-[14px] leading-relaxed">
                <code>
{`// Welcome to my portfolio
const profile = {
  name: 'Abdur Jobbar',
  role: 'Frontend Engineer',
  location: 'Dhaka, Bangladesh',
  skills: ['React', 'Tailwind', 'JavaScript'],
  hireable: true
}`}
                </code>
              </pre>
            </div>
          </div>

        </Flex>
      </Container>
    </div>
  );
};

export default About;
