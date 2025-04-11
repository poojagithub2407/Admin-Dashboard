import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Component from "./pages/Component";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";
import Notifications from "./pages/Notifications";
import Typography from "./pages/Typography";
import Icons from "./pages/Icons";
import Footer from './pages/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/components" element={<Component />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/typography" element={<Typography />} />

        <Route path="/icons" element={<Icons />} />


      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
