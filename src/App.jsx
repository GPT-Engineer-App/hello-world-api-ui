import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ApiStatus from "./pages/ApiStatus.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/api-status" element={<ApiStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
