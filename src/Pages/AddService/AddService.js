import { jsonEval } from "@firebase/util";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/service`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="container w-50 mx-auto">
      <h2>Please proceed out to my add service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Name" {...register("name")} />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          type="number"
          className="mb-2"
          placeholder="Price"
          {...register("price")}
        />
        <input
          type="text"
          className="mb-2"
          placeholder="Photo URL"
          {...register("img")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
