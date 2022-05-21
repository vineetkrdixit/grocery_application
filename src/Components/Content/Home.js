import React from "react";
import ProductBanner from "./ProductBanner";
import ProductFilter from "./ProductFilter";
import ProductsRange from "./ProductsRange";

export default function Home() {
  const ProductData = [
    {
      productId: 1,
      productTitle: "Product1",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 2,
      productTitle: "Product2",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 3,
      productTitle: "Product3",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 4,
      productTitle: "Product4",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 5,
      productTitle: "Product5",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 6,
      productTitle: "Product6",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 7,
      productTitle: "Product7",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 8,
      productTitle: "Product8",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 9,
      productTitle: "Product9",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 10,
      productTitle: "Product10",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 11,
      productTitle: "Product11",
      productDiscription: "This is Something",
      productPrice: 200,
    },
    {
      productId: 12,
      productTitle: "Product12",
      productDiscription: "This is Something",
      productPrice: 200,
    },
  ];
  return (
    <>
      <ProductBanner />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ProductFilter />
          </div>
          <div className="col-sm-9">
            <ProductsRange ProductData={ProductData} />
          </div>
        </div>
      </div>
    </>
  );
}
