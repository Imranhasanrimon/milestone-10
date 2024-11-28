import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = id => {

        fetch(`http://localhost:5500/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers)
                }
            })
    }
    return (
        <div>
            <h1>{users.length}</h1>

            {
                users.map(user => <p key={user._id}>{user.name}:{user.age} <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(user._id)}>X</button></p>)
            }

        </div>
    );
};

export default Users;