import React from "react";

export default function ReviewStars() {
  const handelClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h4>Ratings :</h4>
      <span className="">
        {[...Array(5)].map((val, index) => {
          return (
            <i class="fa fa-star-o" value={index} onClick={handelClick}>
              &nbsp;
            </i>
          );
        })}
      </span>
    </div>
  );
}
