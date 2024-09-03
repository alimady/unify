import React, { useCallback, useState } from "react";
import { FilterContainer } from "./FilterArea.styles";
import { TextField } from "@mui/material";
import DateFilter from "../DatePicker/DatePicker.component";
import { SearchBikes } from "../../app/Api";
import { useQueryClient } from "@tanstack/react-query";
import { BikeData } from "../../app/Api";
import { useDeferredValue } from "react";
import BikeList from "../../Routes/BikeList/BikeList.components";
import useDebounce from "../../app/utils/useDebounce";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import Paginator from "../paginator/Paginator.component";
import Error from "../Error/Error.component";
import { GetDates } from "../../app/utils/getDates";
import NotMatch from "../NotMatch/NotMatch.component";

const FilterArea = () => {
  const [page, setPage] = useState<number>(1);
  const [searchField, setSearchField] = useState<string>("");
  const debouncedFeild = useDebounce(searchField, 500);
  const { Dates } = GetDates();
  const { bikes, isLoading, isError, isPlaceholderData, isFetching } =
    SearchBikes(page, debouncedFeild, Dates);

  if (isFetching) {
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
       <NotMatch/>
      )}
      {isError && <Error />}
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
