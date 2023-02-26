import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LandingUser from "../pages/LandingUser";
import LandingTech from "../pages/LandingTech";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="landingUser" element={<LandingUser />}/>
                <Route path="landingTech" element={<LandingTech />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;