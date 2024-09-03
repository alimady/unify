import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import { keepPreviousData } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

// In addition to caching, React Query also supports background refetching.
// This means that React Query will automatically fetch new data
// in the background if the cached data is stale.
//  The stale time is the amount of time that the cached data
//  is allowed to be out-of-date before it is refetched. The default
//  stale time is 5 minutes.

/**
 *  when the query is performed then the data is fetched and cached,we have possible senarious:
 *  the data not fetched from server until stale time is elapsed the will be fetching
 *  but if  gctime is terminated before then data will be fetching from server even if stale time not has elapsed yet
 *
 *
 *
 *
 *
 */
export type BikeData = {
  title: string;
  date_stolen: number;
  description: string;
  year: string;
  stolen_location: string;
  large_img: string | null;
  id: number;
};

type dataprops =
  | {
      StartDate: string;
      EndDate: string;
    }
  | undefined;

export const SearchBikes = (
  page = 1,
  query = "",
  value: dataprops = undefined
) => {
  const { isError, data, isLoading, isSuccess, isPlaceholderData, isFetching } =
    useQuery({
      queryKey: ["todos", query, page],
      queryFn: async () => {
        return await axios
          .get(
            `https://bikeindex.org:443/api/v3/search?per_page=10&page=${page}&query=${query}`
          )
          .then((res) => {
            return res.data;
          });
      },
      select: (data) => {
        const CleanedData = data.bikes.map((bike: BikeData) => {
          return {
            title: bike.title,
            date_stolen: bike.date_stolen,
            description: bike.description,
            year: bike.year,
            stolen_location: bike.stolen_location,
            large_img: bike.large_img,
            id: bike.id,
          };
        });

        if (value?.StartDate !== undefined && value?.EndDate !== undefined) {
          const firstDate = new Date(value!.StartDate);
          const EndDate = new Date(value!.EndDate);
          const filterByDateDate = CleanedData.filter(
            (bike: BikeData) =>
              firstDate < moment.unix(bike.date_stolen).toDate() &&
              EndDate > moment.unix(bike.date_stolen).toDate()
          );
          //console.log(filterByDateDate)
          return filterByDateDate;
        }
        return CleanedData;
      },

      retry: 0,
       refetchOnReconnect:true,
       refetchOnWindowFocus:false,
       
       placeholderData: keepPreviousData,
    });

  return {
    isError,
    bikes: data,
    isSuccess,
    isLoading,
    isPlaceholderData,
    isFetching,
  };
};
