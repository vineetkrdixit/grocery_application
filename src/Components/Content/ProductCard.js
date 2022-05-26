import React from "react";
import "../../Components/Content/ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="col-sm-3 mb-3 mt-3 fullCard">
      <div className="card">
        <div className="ProductImgs">
          <img src={props.imgSrc} className="card-img-top" alt="..." />
        </div>
        <ul className="list-group list-group-flush UL border-0">
          <div className="ProductTitle">
            <li className="list-group-item border-0 pb-0 ProductTitle">
              <strong>{props.productTitle}</strong>
            </li>
          </div>
          <li className="list-group-item border-0">
            <strong> Price:&nbsp;&nbsp;{props.productPrice} INR</strong>
          </li>
          <div className="ProductDis">
            <li
              className="list-group-item border-0 pb-0 ProductDis"
              title={props.productDiscription}
            >
              {props.productDiscription}
            </li>
          </div>
        </ul>
        <div className="ReadMore">
          <button className="btn btn-success btn-sm mb-3 mt-2  ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
