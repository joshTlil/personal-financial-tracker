import ProtectedRoute from "./ProtectedRoute.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.jsx";
import Login from "./login.jsx";
import InfoForm from "./form.jsx";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
    <Route
        path="/home"
        element={
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        }
    />
    <Route path="/form" element={<InfoForm />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;