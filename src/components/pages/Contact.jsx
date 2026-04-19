import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Contact = () => {
  return (
    <div className="py-10 bg-[#0f172a] w-full">
      <Container>
        <Flex>
          <div className="flex flex-col lg:flex-row gap-10 w-full">

           
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-white font-bold text-[20px] md:text-[24px]">
                Let’s work together! Send me a message anytime.
              </h2>

              <p className="text-gray-300 mt-4 text-[15px] md:text-[17px] leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to
                reach out. I’m always open to discussing new ideas.
              </p>

            
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 justify-center lg:justify-start">
                  <MdCheckCircleOutline className="text-[#22c55e] text-xl mt-1" />
                  <p className="text-white text-[15px]">
                    5+ years of Experience
                  </p>
                </div>

                <div className="flex items-start gap-3 justify-center lg:justify-start">
                  <MdCheckCircleOutline className="text-[#22c55e] text-xl mt-1" />
                  <p className="text-white text-[15px]">
                    Professional Web Designer
                  </p>
                </div>

                <div className="flex items-start gap-3 justify-center lg:justify-start">
                  <MdCheckCircleOutline className="text-[#22c55e] text-xl mt-1" />
                  <p className="text-white text-[15px]">
                    Mobile Apps Design
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-6 mt-6">
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-white text-[26px] hover:text-green-500 transition" />
                </a>
                <a href="https://github.com/abdurjobbarali" target="_blank">
                  <FaGithub className="text-white text-[26px] hover:text-green-500 transition" />
                </a>
                <a href="mailto:mdabdurjobbarali651268mail@gmail.com">
                  <IoMdMailOpen className="text-white text-[26px] hover:text-green-500 transition" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-[#1e293b] p-5 md:p-8 rounded-2xl border border-slate-700 hover:border-[#a78bfa] transition">

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full mt-1 p-3 rounded-lg bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full mt-1 p-3 rounded-lg bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm">Phone</label>
                    <input
                      type="text"
                      placeholder="Your Number"
                      className="w-full mt-1 p-3 rounded-lg bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full mt-1 p-3 rounded-lg bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-gray-300 text-sm">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full mt-1 p-3 rounded-lg bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                  ></textarea>
                </div>

                <button className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white border-2 border-[#a78bfa] hover:bg-green-500 transition w-full sm:w-auto">
                  Send Message <FaPaperPlane />
                </button>

              </div>
            </div>

          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Contact;