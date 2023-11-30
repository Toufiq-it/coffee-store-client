import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
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
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-3/4 pr-4 p-10">
                <div className="space-y-4">
                    <h2 className="card-title ">Name : {name}</h2>
                    <p><span className="font-bold">Quantity : </span> {quantity}</p>
                    <p><span className="font-bold">Supplier : </span> {supplier}</p>
                    <p><span className="font-bold">Taste : </span> {taste}</p>
                    
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-outline btn-success">view</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-outline btn-info">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-outline btn-error"> X 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;