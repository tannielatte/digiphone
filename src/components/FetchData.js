import React, { useState } from "react";
import { useEffect } from "react";
import ProductList from "../pages/ProductList";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="container justify-content-center py-5">
      <div className="row g-5 text-center justify-content-center align-items-center">
      <div className="text-center pb-5">
        <h2>Digiphone Products</h2>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat.
        </p>
      </div>
      {
        data && data.length > 0 && 
        data.map((data) => 
        <ProductList key={data.id} data={data} />)
      }
    </div>
    </div>
    
  );
}
