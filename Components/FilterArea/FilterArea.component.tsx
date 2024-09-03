import React, { useCallback, useState } from "react";
import { FilterContainer } from "./FilterArea.styles";
import { TextField } from "@mui/material";
import DateFilter from "../DatePicker/DatePicker.component";
import { SearchBikes } from "../../app/Api";
import { useQueryClient } from "@tanstack/react-query";
import { BikeData } from "../../app/Api";
import { useDeferredValue } from "react";
import BikeList from "../../Routes/BikeList/BikeList.components";
import useDebounce from "../../app/utils";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import Paginator from "../paginator/Paginator.component";

const FilterArea = () => {
  const [page, setPage] = useState<number>(1);
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

  const { bikes, isLoading, isError, isPlaceholderData, isFetching } =
    SearchBikes(page, debouncedFeild, value);

  console.log(isLoading);

  if (isFetching) {
    console.log(isLoading);
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
        </div>
        <DateFilter />
      </FilterContainer>
      {bikes && <BikeList bikes={bikes} />}
      {!isError && !bikes.length && (
        <div>
          <strong>Not Match !!!</strong>
        </div>
      )}
      {isError && (
        <div>
          <strong className="text-red-700">Connection Error !!</strong>
        </div>
      )}
      <Paginator
        page={page}
        isPlaceholderData={isPlaceholderData}
        setPage={setPage}
        bikes={bikes}
      />
    </>
  );
};

export default FilterArea;
