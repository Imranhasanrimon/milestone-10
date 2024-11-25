import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
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
            information of {loadedData.name}
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedData.name} id="" /> <br />
                <input type="text" name="email" defaultValue={loadedData.email} id="" /> <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;