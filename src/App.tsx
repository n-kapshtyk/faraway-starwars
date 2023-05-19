import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PlanetsList from "./pages/PlanetsList";
import PlanetInfo from "./pages/PlanetInfo";

//TODO
//1.Routing + params + 404 page
//2.React query as hooks in api folder + types definition
//2.1 loading/error handling
//3.Page styles
//4.Simple testing

//remove git folder and make good tree !!!

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PlanetsList />} />
        <Route path="/:id" element={<PlanetInfo />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
