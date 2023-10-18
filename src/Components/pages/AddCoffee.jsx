import React from "react";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppler = form.suppler.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      suppler,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "success added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });

    // fetch("http://localhost:500/coffee", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newCoffee),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "click");
    //   });
  };

  return (
    <div className="bg-[#F4F3F0] p-4">
      <h2 className="text-6xl text-center text-black font-extrabold">
        Add a Coffee
      </h2>
      <form onSubmit={handleSubmit}>
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
  );
};

export default AddCoffee;
