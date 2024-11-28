import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const updatedUser = { name, age };
        fetch(`http://localhost:5500/users/${loadedData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Update info of <span style={{ color: 'tomato' }}>{loadedData.name}</span></h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder='Name' id="" /> <br />
                <input type="text" name="age" placeholder='Age' id="" /> <br />
                <button>Update User</button>
            </form>
        </div>
    );
};

export default Update;