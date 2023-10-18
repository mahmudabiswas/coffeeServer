import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, suppler, taste, category, details, photo } =
    coffee;

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppler = form.suppler.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      suppler,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update coffee successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div>
      UpdateCoffee
      <div className="bg-[#F4F3F0] p-4">
        <h2 className="text-6xl text-center text-black font-extrabold">
          Update Coffee
        </h2>
        <form onSubmit={handleUpdateSubmit}>
          {/* first row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter your coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* =========== */}
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Avable Quantity</span>
              </label>
              <label className="input-group">
                <span>quantity</span>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Enter your quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          {/* second row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Suppler</span>
              </label>
              <label className="input-group">
                <span>Suppler</span>
                <input
                  type="text"
                  name="suppler"
                  defaultValue={suppler}
                  placeholder="Enter your suppler"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* =========== */}
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="please tell me your taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}

          {/* third row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <span>Category</span>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter your category name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* =========== */}
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="please enter your details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          {/* photo url */}
          <div className="">
            <div className="form-control md:full ">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <span>Photo Url</span>
                <input
                  type="photo"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter your photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          <button>Block</button>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block btn-accent"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
