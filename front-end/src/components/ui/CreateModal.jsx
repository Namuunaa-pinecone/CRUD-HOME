import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState } from "react";

export const CreateModal = () => {
  const [product, setProduct] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    await fetch(`${BACKEND_ENDPOINT}/product`, options);
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };


  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Create product
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit product</h3>
          <div className="flex flex-col gap-4 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.price}
            />
          </div>
          <button className="btn btn-primary mt-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <form method="dialog" className="modal-backdrop"></form>
      </dialog>
    </div>
  );
};
