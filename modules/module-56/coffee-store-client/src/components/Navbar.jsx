import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>this is navbar</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;