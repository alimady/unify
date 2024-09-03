import { useQuery } from "@tanstack/react-query";
export const initialData = {
    StartDate: "",
    EndDate: "",
  };

export const GetDates=()=>{
    const { data: Dates } = useQuery({
        queryKey: ["dates"],
        queryFn: () => initialData,
      });

      return {Dates}
}
  