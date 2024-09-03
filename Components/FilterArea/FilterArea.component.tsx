import React, { useCallback, useState } from "react";
import { FilterContainer } from "./FilterArea.styles";
import { TextField } from "@mui/material";
import DateFilter from "../DatePicker/DatePicker.component";
import { SearchBikes } from "../../app/queries";
import { useQueryClient } from "@tanstack/react-query";
import { BikeData } from "../../app/queries";
import { useDeferredValue } from "react";
import BikeList from "../../Routes/BikeList/BikeList.components";
import useDebounce from "../../app/utils";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";

const FilterArea = () => {
  const [searchField, setSearchField] = useState<string>("");
  const debouncedFeild = useDebounce(searchField, 500);
  const initialData = {
    StartDate: "",
    EndDate: "",
  };
  const { data: value } = useQuery({
    queryKey: ["dates"],
    queryFn: () => initialData,
  });

  console.log(value)
  
  const { bikes, isLoading, isError } = SearchBikes("1", debouncedFeild,value);
  const deffered = useDeferredValue(bikes);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <FilterContainer>
        <div className="flex justify-between   sm:w-1/2 mb-1">
          <TextField
            id="filled-search"
            label="Title"
            type="search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <button className="w-1/3 bg-blue-600 rounded-sm p-2"> Search</button>
        </div>
        <DateFilter />
      </FilterContainer>
      {bikes && <BikeList bikes={deffered} />}
      {!isError && !bikes?.length && (
        <div>
          <strong>Not Match !!!</strong>
        </div>
      )}
      {isError && (
        <div>
          <strong className="text-red-700">Connection Error !!</strong>
        </div>
      )}
    </>
  );
};

export default FilterArea;
