 import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
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
  id:number
};

type dataprops={
    StartDate: string;
    EndDate: string;
}| undefined

export const  SearchBikes = (id="",query="",value:dataprops) => {
   const { isError, data, isLoading, isSuccess } = useQuery({
    queryKey: ["todos",query],
    queryFn: async () => {
      return await axios
        .get(`https://bikeindex.org:443/api/v3/search?page=${id}&query=${query}`)
        .then((res) => {
          return res.data;
        });
    },
    select: (data) => {
    
      const CleanedData= data.bikes.map((bike: BikeData) => {
        return {
          title: bike.title,
          date_stolen: bike.date_stolen,
          description: bike.description,
          year: bike.year,
          stolen_location: bike.stolen_location,
          large_img: bike.large_img,
          id:bike.id
        };
      });

      if (value?.StartDate!==undefined && value?.EndDate!==undefined){
        const firstDate=new Date(value!.StartDate)
        const EndDate=new Date(value!.EndDate)
        const filterByDateDate= CleanedData.filter((bike:BikeData)=>((firstDate<moment.unix(bike.date_stolen).toDate() && (EndDate>moment.unix(bike.date_stolen).toDate()))))
        //console.log(filterByDateDate)
        return filterByDateDate;
       }
          return CleanedData
    },
    retry:0,
    refetchOnWindowFocus:false
  });

  return { isError, bikes:data, isSuccess, isLoading };
};

export const usePost = (id: string) => {
  const { isError, data, isLoading, isSuccess } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      return await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          return res.data;
        });
    },
    //  refetchOnWindowFocus:false,
    //  refetchOnMount:false,
    //  refetchInterval:2000,
    //  refetchIntervalInBackground:false,
    gcTime: 3000,
    staleTime: 20000,
    //  retry:3
    //enabled:false inform rq to not fetching on mount (for onclick {refetch} purpose)
    //
  });

  return { isError, postt: data, isSuccess, isLoading };
};

export const useFetchPosts = () => {
  const { isError, data, isLoading, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          return res.data;
        });
    },
  });

  return { isError, data, isSuccess, isLoading };
};
