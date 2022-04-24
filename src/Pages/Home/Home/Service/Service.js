import React from "react";

const Service = ({ service }) => {
  const { img, name, seller, price } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h4>{seller}</h4>
    </div>
  );
};

export default Service;
