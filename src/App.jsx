import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
