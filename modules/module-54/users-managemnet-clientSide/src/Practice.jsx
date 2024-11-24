import { useEffect, useState } from "react";

const Practice = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/practice/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        fetch('http://localhost:5000/practice/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inside post response', data);
                const newUsers = [...users, data];
                setUsers(newUsers)
            })
    }
    return (
        <div>
            <h1>users: {users.length}</h1>
            {
                users.map(user => <li key={user.id}>{user.name} | {user.age} | {user.email}</li>)
            }
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" id="" /> <br />
                <input type="text" name="email" placeholder="email" id="" /> <br />
                <input type="submit" value="Submit" id="" />
            </form>
        </div>
    );
};

export default Practice;