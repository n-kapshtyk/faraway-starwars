import React from "react";
import { Routes, Route } from "react-router-dom";
import Planets from "./pages/Planets";
import PlanetInfo from "./pages/PlanetInfo";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Planets />} />
        <Route path="/:id" element={<PlanetInfo />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
