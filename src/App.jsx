import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  // Base URL for API requests from our backend
  const baseURL = "https://task-manager-backend-hakk.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//Netlify, Vercel, Render etc are popular free cloud platforms for hosting web applications.

//Netlify is best for static sites and applications with a focus on simplicity and serverless functiopns

//Vercel is optimized for frontend development, especially those using React and Next.js, with strong serverless and edge capabilities

//Render is a versatile platform suitable for full-stack applications, offering more flexible in terms of supported framewworks, databases and backend services

//https://task-manager-backend-hakk.onrender.com