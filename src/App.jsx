import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import RootLayouts from "./components/layout/RootLayouts";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="Project" element={<Project/>} />
          <Route path="Skills" element={<Skills/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
