import React from "react";

export default function ProductCard(props) {
  return (
    <div className="col-sm-3 mb-3 mt-3">
      <div className="card">
        <img src="logo192.png" className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0 ">
            Name: {props.productTitle}
          </li>
          <li className="list-group-item border-0">
            Price:&nbsp;&nbsp;{props.productPrice} INR
          </li>
          <li className="list-group-item border-0">
            Discription:{props.productDiscription}
          </li>
        </ul>
      </div>
    </div>
  );
}
