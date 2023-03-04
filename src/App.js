import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Connect from "./components/Connect";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/Projects" element={<ProjectScreen />} />
      </Routes>
        <Connect />
    </Fragment>
  );
}

export default App;
