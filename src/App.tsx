import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { StudentDashboard } from "./pages/StudentDashboard";

export default function App() {
return <BrowserRouter>
    <Routes>
        <Route path = "/" element={<LandingPage />} />
        <Route path = "/dashboard" element={<StudentDashboard />} />
    </Routes>
</BrowserRouter>;
}