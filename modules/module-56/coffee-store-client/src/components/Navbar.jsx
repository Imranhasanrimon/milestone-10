import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <div className="text-2xl font-semibold flex justify-between items-center max-w-60 mx-auto mt-9">
                <Link to="/">Coffees</Link>
                <Link to="/addCoffee">Add Coffee</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;