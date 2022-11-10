import "./IndexApp.css"
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function IndexApp () {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default IndexApp;