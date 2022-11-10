import { 
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import Servicios from "../Components/Servicios/Servicios"
import Nosotros from "../Components/Nosotros/Nosotros";
import Login from "../Components/Login/Login";
import IndexApp from "../IndexApp";

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={<IndexApp />}>
            <Route index element={<Nosotros />} />,
            <Route path="/nosotros" element={<Nosotros />} />,
            <Route path="/servicios" element={<Servicios />} />,
            <Route path="/login" element={<Login />} />
        </Route>]
    )
)