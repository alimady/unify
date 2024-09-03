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

          const filterByDateDate = CleanedData.filter((bike: BikeData) => {
            return (
              firstDate <= moment.unix(bike.date_stolen).toDate() &&
              EndDate >= moment.unix(bike.date_stolen).toDate()
            );
          });
          return filterByDateDate;
        }
        return CleanedData;
      },
      retry: 0,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
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

export const GetStolenCount = () => {
  const { data: count } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      return await axios
        .get(`https://bikeindex.org:443/api/v3/search/count`)
        .then((res) => {
          return res.data;
        });
    },
    select: (data) => {
      return data.stolen;
    },
  });
  return { count };
};
