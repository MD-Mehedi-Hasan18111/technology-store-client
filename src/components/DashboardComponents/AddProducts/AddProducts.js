import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddProducts.css";

const AddProducts = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const onSubmit = (data, e) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("brand", data.brand);
        formData.append("processor", data.processor);
        formData.append("ram", data.ram);
        formData.append("hdd", data.hdd);
        formData.append("sdd", data.sdd);
        formData.append("gen", data.gen);
        formData.append("price", data.price);
        formData.append("image", data.image[0]);
        formData.append("description", data.description);

        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Product added Successfully!", "", "success");
                    e.target.reset();
                  }
        })
  }

  return (
    <div className="product-form my-3">
      <h3 className="text-center">Add Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="first" type="text" placeholder="Laptop Name" {...register("name")} required />
        <input className="second" type="text" placeholder="Brand Name" {...register("brand")} required />
        <input type="text" placeholder="Processor" {...register("processor")} required />
        <input type="text" placeholder="RAM" {...register("ram")} required />
        <input type="text" placeholder="HDD" {...register("hdd")} />
        <input type="text" placeholder="SSD" {...register("sdd")} />
        <input type="text" placeholder="Generation" {...register("gen")} required />
        <input type="number" placeholder="Price" {...register("price")} required />
        <input className="imageType" accept="image/*" type="file" {...register("image")} required />
        <textarea type="text" placeholder="Description" {...register("description")} required />
        <button type="submit" className="addProductBtn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
