import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { MdCheckCircleOutline } from "react-icons/md";

const About = () => {
  return (
    <div className="py-10 bg-[#0f172a] w-full">
      <Container>
        <Flex className="items-center justify-between gap-10 flex-wrap lg:flex-nowrap">
          {/* Text Content Section */}
          <div className="max-w-xl">
            <h3 className="text-white font-primary font-bold text-[20px] mb-2">
              More About
            </h3>
            <h4 className="text-[#a78bfa] font-primary font-bold text-[32px] leading-tight">
              I am Frontend Developer with React
            </h4>
            <p className="text-[17px] text-gray-300 font-medium font-primary mt-6 leading-relaxed">
              I am a dedicated Frontend Developer with strong expertise in
              React.js and modern web technologies. I specialize in developing
              responsive, accessible, and high-performance user interfaces. I am
              passionate about writing clean, maintainable code and delivering
              seamless user experiences.
            </p>
            <h3 className="text-white font-primary font-bold text-[30px] mt-3">
              Education
            </h3>
            <div className="flex gap-3 mt-8">
              <MdCheckCircleOutline className="text-[#22c55e] text-2xl mt-1 shrink-0" />
              <h3 className="text-white font-primary font-semibold text-[16px] max-w-100">
                I am a student at Munshigonj Polytechnic Institute pursuing a
                4-year diploma in engineering.
              </h3>
            </div>
            <div className="flex gap-3 mt-8">
              <MdCheckCircleOutline className="text-[#22c55e] text-2xl mt-1 shrink-0" />
              <h3 className="text-white font-primary font-semibold text-[16px]">
                I am studying Creative IT Institute
              </h3>
            </div>
          </div>

          <div className="bg-[#1e293b] text-[#e5e7eb] p-8 rounded-2xl w-full max-w-137.5 font-mono shadow-2xl border border-slate-700/50">
            <pre className="text-[14px] line-height-[1.6] overflow-x-auto">
              <code className="block">
                <span className="text-slate-500">
                  // Welcome to my portfolio
                </span>
                <br />
                <span className="text-[#a78bfa]">const</span>{" "}
                <span className="text-[#60a5fa]">profile</span> = {"{"}
                <br />
                name: <span className="text-[#22c55e]">'Abdur Jobbar'</span>,
                <br />
                role:{" "}
                <span className="text-[#22c55e]">'Frontend Engineer'</span>,
                <br />
                location:{" "}
                <span className="text-[#22c55e]">'Dhaka, Bangladesh'</span>,
                <br />
                skills: [
                <br />
                <span className="text-[#22c55e]">'React'</span>,{" "}
                <span className="text-[#22c55e]">'Tailwind'</span>,{" "}
                <span className="text-[#22c55e]">'JavaScript'</span>
                <br />
                ],
                <br />
                hireable: <span className="text-[#38bdf8]">true</span>
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
