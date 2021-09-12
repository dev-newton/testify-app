import React, { useEffect, useState } from "react";
import db from "../firebase.config";

const New = (props) => {
  const [description, setDescription] = useState("");
  const [church, setChurch] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const date = Date.now();
    const data = {
      category,
      church,
      description,
      date,
    };

    db.collection("testimonies")
      .add(data)
      .then(() => {
        props.history.push("/");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className=" new max-container">
      <div className="container">
        <h2>Add New Testimony</h2>
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form class="row g-3" onSubmit={onSubmit}>
          <div class="col-md-9 col-sm-12">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div class="col-sm-12 col-md-9">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category
              </label>
              <select
                class="form-control"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="Pains">Pains</option>
                <option value="Swelling">Swelling</option>
                <option value="Creative Miracles">Creative Miracles</option>
                <option value="Bleeding">Bleeding</option>
                <option value="Bad Dreams">Bad Dreams</option>
                <option value="Emotional Pains">Emotional Pains</option>
                <option value="Planning Divorce">Planning Divorce</option>
                <option value="Blindness">Blindness</option>
                <option value="Deafness">Deafness</option>
                <option value="Barrenness">Barrenness</option>
                <option value="Business">Business</option>
                <option value="Delay In Marriage">Delay In Marriage</option>
              </select>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Church Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Church name"
                onChange={(e) => setChurch(e.target.value)}
              />
            </div>
          </div>

          <div class="col-sm-12 col-md-9">
            <button type="submit" class="btn btn-primary w-100">
              {loading ? (
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Add Testimony"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
