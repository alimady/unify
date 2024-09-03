import React from "react";
import BikeCaseItem from "../../Components/BikeCaseItem/BikeCaseItem.components";
import { useQueryClient } from "@tanstack/react-query";
import { BikeData, SearchBikes } from "../../app/Api";

type BikeListProps = {
  bikes: BikeData[];
};
const BikeList = ({ bikes }: BikeListProps) => {
  return (
    <div className=" grid  md:grid-cols-2 lg:grid-cols-3  gap-4">
      {bikes &&
        bikes.map((bike: BikeData) => {
          return <BikeCaseItem bike={bike} key={bike.id} />;
        })}
    </div>
  );
};

export default BikeList;
