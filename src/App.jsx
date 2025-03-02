import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordian from "./Projects/Accordian/Accordian";
import Colorgenerator from "./Projects/Random_Color_Generator";
import StarRating from "./Projects/Star_Rating";
import Pro from "./Projects/Product_Dashboard/Pro";

const App = () => {
  return (
    <div className="">
      {/* <Accordian />
      <Colorgenerator />
      <StarRating /> */}
      <Pro />
    </div>
  );
};

export default App;
