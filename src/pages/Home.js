import React from "react";
import CustomerReview from "./CustomerReview";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Banner from '../components/mainpage/Banner';

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <CustomerReview />
      <Contact />
      <Dashboard />
    </div>
  );
}
