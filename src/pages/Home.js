import React, { useState, useEffect } from "react";
import moment from "moment";

import db from "../firebase.config";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const results = [];
    const subscriber = db.collection("testimonies").orderBy("date", "desc");
    const res = await subscriber.get();

    res.forEach((doc) => {
      results.push({ ...doc.data(), key: doc.id });
    });

    setData(results);
    setLoading(false);
  };

  return (
    <div className="max-container">
      {loading ? (
        "Loading...."
      ) : (
        <div className="container">
          <h3>Testimonies</h3>
          <div className="search-wrapper">
            <input
              type="text"
              className="search"
              placeholder="Search categories..."
            />
          </div>
          {data.map((data, i) => (
            <div key={i} className="box_wrapper">
              <div className="main">
                <p>{data.description}</p>
                <div className="cat_cur_wrapper">
                  <p>{data.church}</p>
                  <p>{data.category}</p>
                  <p className="date">
                    {moment(data.date.seconds).format("LLL")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
