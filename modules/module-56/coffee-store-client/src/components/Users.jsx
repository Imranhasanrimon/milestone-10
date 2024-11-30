import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-6">Users({users.length})</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, i) => <tr key={user._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;