import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    return (
        <div>
            <h1>{users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name}:{user.age}</p>)
            }

        </div>
    );
};

export default Users;