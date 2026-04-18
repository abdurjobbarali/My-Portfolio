import React from 'react';
import Container from '../common/Container';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';

const Skills = () => {

  const skillsData = [
    { name: "React.js", icon: <FaReact className="text-[#61dafb]" />},
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />},
    { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" />},
    { name: "HTML5", icon: <FaHtml5 className="text-[#e34f26]" />, },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" />,},
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />,},
    { name: "GitHub", icon: <FaGithub className="text-white" />,},
{name:"Bootstrap",icon: <BsBootstrapFill className='text-white' />}
  ];

  return (
    <div className="py-20 bg-[#0f172a] w-full">
      <Container>
     
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#a78bfa] font-primary font-bold text-[18px] uppercase tracking-wider">
            Technical Expertise
          </h3>
          <h2 className="text-white font-primary font-bold text-[36px] mt-2">
            My Skills & Knowledge
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-[#1e293b] p-8 rounded-3xl border hover:border-[#a78bfa] transition-all duration-500 shadow-xl hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">

                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-500">
                  {skill.icon}
                </div>
                
                <h4 className="text-white font-primary font-bold text-xl mb-4">
                  {skill.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;