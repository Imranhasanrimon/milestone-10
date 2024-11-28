import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, supplier, taste, category, photo } = coffee;

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = coffees.filter(cof => cof._id !== id);
                        setCoffees(remaining)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-gray-200 shadow-xl items-center p-3 gap-4">
            <img className='w-40 h-40 rounded-xl'
                src={photo}
                alt="Movie" />
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>supplier: {supplier}</p>
                    <p>category: {category}</p>
                    <p>taste: {taste}</p>
                </div>
                <div className="join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updatecoffee/${_id}`} className="btn join-item">Edit</Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-200 join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}
export default CoffeeCard;

//this project is done"
