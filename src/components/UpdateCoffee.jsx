import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Added",
                        text: "Coffee Update Successfully",
                        icon: "success",
                        confirmButtonText: "cool"
                    });
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] p-24 max-w-6xl mx-auto">
            <h2 className="text-3xl mb-10 font-extrabold">Update a coffee : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name & quantity row */}
                <div className="md:flex mb-6">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 ml-5">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form Supplier row */}
                <div className="md:flex mb-6">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 ml-5">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-6">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 ml-5">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form photo url row */}
                <div className="mb-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C] hover:bg-[#dba154]" />
            </form>
        </div>
    );
};

export default UpdateCoffee;