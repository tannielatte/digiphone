import React from "react";
import CustomerReview from "./CustomerReview";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Banner from "../components/mainpage/Banner";
import FetchDataProduct from "../components/FetchDataProduct";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <FetchDataProduct />
      <CustomerReview />
      <Contact />
      <Dashboard />
    </div>
  );
}
