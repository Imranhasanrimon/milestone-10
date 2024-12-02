import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <div className="text-xl font-semibold flex justify-between items-center max-w-md mx-auto mt-9">
                <NavLink to="/">Coffees</NavLink>
                <NavLink to="/addCoffee">Add Coffee</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/signUp">Sign Up</NavLink>
                <NavLink to="/signIn">Log In</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;

