import React from "react";
import PageButton from "../PageButton/PageButton.component";
import { Paginator as PaginationArea, NavBotton } from "./Paginator.styles";
import { BikeData } from "../../app/Api";
import { useQueryClient } from "@tanstack/react-query";

type PaginatorProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  bikes: BikeData[];
  isPlaceholderData: boolean;
};

const Paginator = ({
  page,
  setPage,
  bikes,
  isPlaceholderData,
}: PaginatorProps) => {
  return (
    <PaginationArea>
      <NavBotton
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Preve
      </NavBotton>
      <p> The Api NOT provides  information about page in respone </p>
      <NavBotton
        onClick={() => {
          setPage((old) => old + 1);
        }}
      >
        Next
      </NavBotton>
    </PaginationArea>
  );
};

export default Paginator;
