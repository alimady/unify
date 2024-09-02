import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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


const onSuccess=(msg:string)=>{
  console.log(msg);
}
   
export  const useSearchBikes = (id?: number) => {
  const { isError, data, isLoading ,isSuccess } = useQuery({
    queryKey: ["todos", id],
    queryFn:  async() => {
      return  await axios.get(`bikeindex.org/api/v3/search:443`)
      .then((res) => {
       return res.data;
      });
        
    },
  });

     return {isError,Bikes:data,isSuccess , isLoading} 

};


export  const usePost = (id: string) => {
  const { isError, data, isLoading ,isSuccess } = useQuery({
    queryKey: ["posts", id],
    queryFn:  async() => {
      return  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
       return res.data;
      });
        
    },
    //  refetchOnWindowFocus:false,
    //  refetchOnMount:false,
    //  refetchInterval:2000,
    //  refetchIntervalInBackground:false,
     gcTime:3000,
     staleTime:20000,
    //  retry:3
    //enabled:false inform rq to not fetching on mount (for onclick {refetch} purpose)
    //

    
    
  });

     return {isError,postt:data,isSuccess , isLoading} 

};


export  const useFetchPosts = () => {
  const { isError, data, isLoading ,isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn:  async() => {
      return  await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
       return res.data;
      });
        
    },
    select:(data)=>{
       return  data.filter((a:undefined,idx:number) => (idx < 5))
 }
  });

     return {isError,posts:data,isSuccess , isLoading} 

};
