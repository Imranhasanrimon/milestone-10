import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
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