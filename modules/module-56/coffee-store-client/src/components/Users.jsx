import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-6">Users({loadedUsers.length})</h1>

        </div>
    );
};

export default Users;