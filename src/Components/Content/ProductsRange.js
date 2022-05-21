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
            productDiscription={items.productDiscription}
            productPrice={items.productPrice}
          />
        );
      })}
    </div>
  );
}
