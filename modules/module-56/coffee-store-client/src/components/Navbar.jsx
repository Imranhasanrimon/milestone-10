import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <div className="text-2xl font-semibold flex justify-between items-center max-w-60 mx-auto mt-9">
                <NavLink to="/">Coffees</NavLink>
                <NavLink to="/addCoffee">Add Coffee</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;