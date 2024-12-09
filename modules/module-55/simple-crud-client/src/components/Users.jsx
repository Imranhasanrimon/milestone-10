import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedData = useLoaderData()
    const [data, setData] = useState(loadedData)
    const handleDelete = _id => {
        console.log('delete ', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers:{

            // },
            // body: JSON.stringify()
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                if (user.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = data.filter(d => d._id !== _id);
                    setData(remaining)
                }
            })
    }
    return (
        <div>
            <h2>users: {data.length} </h2>
            <div>
                {
                    data.map(user => <p key={user._id}>{user.name} | {user.email} <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;
//git hub commit