import React from "react";
import BikeList from "../BikeList/BikeList.components";
import FilterArea from "../../Components/FilterArea/FilterArea.component";
import TotalCases from "../../Components/TotalCases/TotalCases.component";

const Main = () => {
  return (
    <div>
      <TotalCases />
      <FilterArea />
    </div>
  );
};

export default Main;
