'use client';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { Dispatch, SetStateAction } from "react";

const Pages = (props: {
  setLoading: Dispatch<SetStateAction<boolean>>,
  page: number,
  isEmpty: boolean
}) => {
  const addPage = (newPage: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', newPage.toString());
    return url.toString();
  };
  const handlePageChange = (newPage: number) => {
    window.history.pushState({}, '', addPage(newPage));
    props.setLoading(true);
  };
  return (
    <Pagination>
            <PaginationContent>
              <PaginationItem className={` ${props.page === 1 ? "pointer-events-none text-gray-300" : ""}`}>
                <PaginationPrevious onClick={() => handlePageChange(props.page - 1)} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageChange(props.page > 2 ? props.page - 1 : 1)}
                  isActive={props.page === 1}
                  className={` ${props.page === 1 ? "bg-gray-100" : ""}`}
                >
                  {props.page > 2 ? props.page - 1 : 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageChange(props.page > 2 ? props.page : 2)}
                  isActive={props.page !== 1}
                  className={` ${props.page !== 1 ? "bg-gray-100" : ""}`}
                >
                  {props.page > 2 ? props.page : 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={` ${props.isEmpty ? "pointer-events-none text-gray-300" : ""}`}>
                <PaginationLink onClick={() => handlePageChange(props.page > 2 ? props.page + 1 : 3)}>
                  {props.page > 2 ? props.page + 1 : 3}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={` ${props.isEmpty ? "pointer-events-none text-gray-300" : ""}`}>
                <PaginationNext onClick={() => handlePageChange(props.page + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
  );
}

export default Pages;