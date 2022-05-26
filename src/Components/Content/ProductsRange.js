import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsRange(props) {
  return (
    <div className="row">
      {props.ProductData.map((items) => {
        return (
          <ProductCard
            key={items.productId}
            productId={items.productId}
            productTitle={items.productTitle}
            productDiscription={items.productDescription}
            productPrice={items.productPrice}
            imgSrc={items.imgSrc}
          />
        );
      })}
      <div className="d-flex justify-content-center mb-3 mt-2">
        <button type="button" class="btn btn-primary">
          Show More
        </button>
      </div>
      ;
    </div>
  );
}
