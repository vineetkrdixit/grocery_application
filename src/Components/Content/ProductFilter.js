import React from "react";
import "../Content/ProductFilter.css";
export default function ProductFilter() {
  return (
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Filter</h5>
        <div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="mt-3">
            <h6>Categories</h6>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Fruits & Vegitables
              </label>
            </div>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Staples
              </label>
            </div>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Drinks & Baverages
              </label>
            </div>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Dairy Products
              </label>
            </div>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Pet Foods
              </label>
            </div>
          </div>
          <div className="mt-3">
            <h6>Price</h6>
            <div className="PriceRange">
              <div>
                <label for="Fromprice fw-semibold">From</label>
                <input type="Number" id="Fromprice" class="form-control" />
              </div>
              <div className="p-2 mt-3">
                <b>-</b>
              </div>
              <div>
                <label for="Toprice ">To</label>
                <input type="Number" id="Toprice" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
