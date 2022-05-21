import React from "react";
import ReviewStars from "./ReviewStars";

export default function FeedbackForm() {
  return (
    <>
      <div className="container w-50">
        <h3 className="mb-5 mt-3">Feedback</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Name :
            </label>
            <input type="text" class="form-control" id="exampleInputName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email :
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputFeedback" class="form-label">
              Feedback :
            </label>
            <textarea
              type="password"
              class="form-control"
              id="exampleInputFeedback"
            ></textarea>
          </div>
          <ReviewStars />

          <button type="submit" class="btn btn-primary mt-5 mb-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
