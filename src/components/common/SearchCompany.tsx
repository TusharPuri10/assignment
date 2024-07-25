"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";
import { useState, useRef } from "react";

const SearchCompany = () => {
  const [company_name, setCompanyName] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const addPage = (newPage: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    return url.toString();
  };

  const handleCompanySearch = (company_name: string) => {
    console.log("hello", company_name);
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const search = params.get("company_name");

    if (company_name === "") {
      params.delete("company_name");
    } else {
      if (search === company_name) {
        return;
      }
      params.set("company_name", company_name);
    }

    window.history.pushState({}, "", url.toString());
    window.history.pushState({}, "", addPage(1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCompanyName(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      handleCompanySearch(value);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCompanySearch(company_name);
    }
  };

  return (
    <>
      <div className="relative hidden md:flex items-center text-lg md:text-md lg:text-sm">
        <Search className="absolute ml-2 pointer-none w-4 h-4 text-gray-500 " />
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search Companies"
          className="md:w-80 w-20 h-7 text-sm outline-0 pl-8 outline-none border border-gray-300 rounded-md focus:ring-1 focus:ring-[#B04425] focus:border-transparent "
        />
      </div>
      {/* search bar in mobile */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-0 group">
            <Search
              className="pointer-none w-5 h-5 text-gray-500 mt-[10px]"
              style={{ strokeWidth: 2.5 }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-semibold p-0 mt-2 mx-10">
            <Search className="absolute ml-2 mt-4 pointer-none w-4 h-4 text-gray-500 " />
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Search Companies"
              className="md:w-80 w-80 h-12 outline-0 pl-8 outline-none border border-gray-300 rounded-md focus:ring-1 focus:ring-[#B04425] focus:border-transparent "
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SearchCompany;