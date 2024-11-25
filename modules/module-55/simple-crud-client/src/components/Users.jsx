import { useLoaderData } from "react-router-dom";

const Users = () => {
    const data = useLoaderData()
    const handleDelete = _id => {
        console.log('delete ', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers:{

            // },
            // body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                }
            })
    }
    return (
        <div>
            <h2>users: {data.length} </h2>
            <div>
                {
                    data.map(user => <p key={user._id}>{user.name} | {user.email} <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;