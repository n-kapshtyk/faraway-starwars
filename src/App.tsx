import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PlanetsList from "./pages/PlanetsList";
import PlanetInfo from "./pages/PlanetInfo";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./components/MainLayout";

//TODO
//Not remove count of pages
//Main page list(split to components)
//Sceleton for detail page
//3.Detail page styles + modal update data(split to components)
//4.Simple testing

//remove git folder and make good tree !!!

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PlanetsList />} />
        <Route path="/:id" element={<PlanetInfo />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
