import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(detail);

  const found = detail?.find((details) => details.id === id);
  console.log(found);

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5">
          <img src={found?.img} alt="phone" className="img-fluid" />
        </div>
        <div className="col-lg-6 py-4">
          <h4>{found?.name}</h4>
          <p className="fw-bold text-primary muted">BRAND : {found?.brand}</p>
          <h6 className="py-3">ABOUT ITEM</h6>
          <ul>
            <li>{found?.about1}</li>
            <li>{found?.about2}</li>
            <li>{found?.about3}</li>
            <li>{found?.about4}</li>
            <li>{found?.about5}</li>
            <li>{found?.about6}</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-lg6">
          
        </div>
      </div>
    </div>
  );
}
