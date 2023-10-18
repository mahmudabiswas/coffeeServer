import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, suppler, taste, category, details, photo } =
    coffee;

  const handleDeleted = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remanning = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remanning);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card m-4  bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="flex justify-between m-4 gap-4">
          <div>
            <h2 className="card-title">Name:{name}</h2>
            <p>{quantity}</p>
            <p>{suppler}</p>
            <p>{taste}</p>
          </div>

          <div className="card-actions  justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-active">view</button>
              <Link to={`updateCoffee/${_id}`}>
                {" "}
                <button className="btn">Edit</button>
              </Link>
              <button className="btn" onClick={() => handleDeleted(_id)}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
