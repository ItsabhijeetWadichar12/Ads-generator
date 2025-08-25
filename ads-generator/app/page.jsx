
import React from "react";
import HomePage from "./home/page";
import Navbar from "./[navbar]/page";

import AboutPage from "./about/page";

function page() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <AboutPage />

    </div>
  );
}

export default page;
