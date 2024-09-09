import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/index";
import { Projects } from "../pages/projects/index";
import { Tech } from "../pages/technologies/index";
import { About } from "../pages/about/index";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/technologies" element={<Tech />}/>
    </Routes>
  )
  
}