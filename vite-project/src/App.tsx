import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import ExplorePage from "./pages/ExplorePage";
import CreatePage from "./pages/CreatePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
