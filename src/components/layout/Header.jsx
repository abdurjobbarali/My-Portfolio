import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Logo from "/src/assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#0f172a] py-8">
      <Container>
        <Flex>
          <div className="flex items-center justify-between w-full">
            <Image src={Logo} />

            <ul className="flex items-center gap-x-8 mx-auto">
              <li className="text-white hover:text-green-500 transition duration-500 text-[20px] font-primary ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-white hover:text-green-500 transition duration-500 text-[20px] font-primary ">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="text-white hover:text-green-500 transition duration-500 text-[20px] font-primary ">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="text-white hover:text-green-500 transition duration-500 text-[20px] font-primary ">
                <Link to={"/project"}>Project</Link>
              </li>
              <li className="text-white hover:text-green-500 transition duration-500 text-[20px] font-primary ">
                <Link to={"/Skills"}>Skills</Link>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
