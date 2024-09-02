import React from "react";
import { FilterContainer } from "./FilterArea.styles";
import { TextField } from "@mui/material";
import DateFilter from "../DatePicker/DatePicker.component";
import { useSearchBikes } from "../../app/queries";

const FilterArea = () => {
  const {Bikes}= useSearchBikes()
  console.log(Bikes)
  return (
    <FilterContainer>
      <div className="flex justify-between   sm:w-1/2 mb-1">
        <TextField
          id="filled-search"
          label="Title"
          type="search"
         />
       <button  className="w-1/3 bg-blue-600 rounded-sm p-2"> Search</button>
      </div>
      <DateFilter />
    </FilterContainer>
  );
};

export default FilterArea;
