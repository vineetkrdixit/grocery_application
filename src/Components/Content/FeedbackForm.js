import React from "react";
import ReviewStars from "./ReviewStars";

export default function FeedbackForm() {
  return (
    <>
      <div className="container w-50">
        <h3 className="mb-5 mt-3">Feedback</h3>
        <form>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Name :
            </label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputFeedback" className="form-label">
              Feedback :
            </label>
            <textarea
              type="password"
              className="form-control"
              id="exampleInputFeedback"
            ></textarea>
          </div>
          <ReviewStars />

          <button type="submit" className="btn btn-primary mt-5 mb-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
