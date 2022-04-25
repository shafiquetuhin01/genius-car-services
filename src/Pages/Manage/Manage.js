import React from "react";
import useServices from "../../Hook/useServices";

const Manage = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want to confirm?");
    if (confirm) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="container mt-3 mx-auto w-25">
      <h2>This is manage service</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Manage;
