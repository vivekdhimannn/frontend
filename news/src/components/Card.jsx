import React, { useState } from "react";
export default function Card() {
  let [value, setValue] = useState([]);
  let a = async () => {
    //slet url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6f48d1aedced423fa51ba887653d5c63"
    let url = "https://kontests.net/api/v1/all";
    let data = await fetch(url);
    let newData = await data.json();
    let fd = newData.map((n) => {
      return (
        <div className="shadow p-3 mb-5 bg-body rounded card mx-2 my-2" key={n.id} style={{ width: "24rem" , boxSizing: "border-box"}}>
          <span className="position-absolute top-0 end-0 badge text-bg-dark w-25 ">{n.site?n.site:"N/A"}</span>
          <img
            height="200px"
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{n.title}</h4>
            <p />
            starts at: {n.start_time}
            <p /> ends at: {n.end_time}
            <p className="card-text">
              {n.description}
            </p>
            <a href={n.url} className="btn btn-dark">
              Register
            </a>
          </div>
        </div>
      );
    });
    setValue(fd);
  };
  a();
  return <><div className="container" key="id">
    <div className="row mx-5 text-center">
        {value}
    </div>
</div></>;
}