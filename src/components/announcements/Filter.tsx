"use client";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnnouncementTypes } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, SetStateAction, Dispatch } from "react";
import { Button } from "../ui/button";

const Filter = (props: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setQuery: Dispatch<SetStateAction<string | null>>;
  type?: string;
}) => {
  const searchParams = useSearchParams();
  const sentiments = searchParams.get("sentiment")?.split(",") || [];
  const categories = searchParams.get("category")?.split(",") || [];
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const addPage = (newPage: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    return url.toString();
  };

  const handleSentimentChange = (sentiment: string) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const sentiments = params.get("sentiment")?.split(",") || [];

    if (sentiments.includes(sentiment)) {
      // Remove the sentiment if it already exists
      const newSentiments = sentiments.filter((s) => s !== sentiment);
      if (newSentiments.length > 0) {
        params.set("sentiment", newSentiments.join(","));
      } else {
        params.delete("sentiment");
      }
    } else {
      // Add the sentiment if it doesn't exist
      sentiments.push(sentiment);
      params.set("sentiment", sentiments.join(","));
    }

    window.history.pushState({}, "", url.toString());
    window.history.pushState({}, "", addPage(1));
    props.setLoading(true);
  };

  const handleCategoryChange = (category: string) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const categories = params.get("category")?.split(",") || [];

    if (categories.includes(category)) {
      // Remove the category if it already exists
      const newCategories = categories.filter((c) => c !== category);
      if (newCategories.length > 0) {
        params.set("category", newCategories.join(","));
      } else {
        params.delete("category");
      }
    } else {
      // Add the category if it doesn't exist
      categories.push(category);
      params.set("category", categories.join(","));
    }

    window.history.pushState({}, "", url.toString());
    window.history.pushState({}, "", addPage(1));
    props.setLoading(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      props.setQuery(value);
      props.setLoading(true);
    }, 500);
  };

  const clearAllFilter = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("sentiment");
    url.searchParams.delete("category");
    window.history.pushState({}, "", url.toString());
    window.history.pushState({}, "", addPage(1));
    props.setQuery(null);
    props.setLoading(true);
  };

  return (
    <div
      className={`w-[13.8rem] text-black ${
        props.type ? "flex" : "hidden lg:flex fixed z-10"
      }  flex-col items-center `}
    >
      <div className="text-left w-full px-8 py-6 text-sm font-medium text-gray-700">
        Filter by
      </div>
      <div className="py-5">
        <Search className="absolute ml-3 mt-[14px] z-0 pointer-none w-3 h-3 text-gray-400 " />
        <input
          onChange={handleChange}
          placeholder="Type to search"
          className="w-[11.2rem] h-10 text-xs outline-0 pl-7 outline-none border border-gray-300 rounded-md focus:ring-1 focus:ring-[#B04425] focus:border-transparent "
        />
      </div>
      <div className="text-left w-full py-5 pl-8 pr-5 text-sm font-medium text-gray-700 flex justify-between">
        <p>Watchlist</p>
        <Checkbox className="my-auto" />
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm text-gray-800 font-medium">
            Sentiment
          </AccordionTrigger>
          <AccordionContent className="text-left w-full py-4 pl-8 pr-5 text-xs text-gray-500 flex flex-col space-y-3">
            <div className="flex justify-between">
              <p>Positive</p>
              <Checkbox
                className="my-auto w-[14px] h-[14px]"
                checked={sentiments.includes("positive")}
                onClick={() => handleSentimentChange("positive")}
              />
            </div>
            <div className="flex justify-between">
              <p>Neutral</p>
              <Checkbox
                className="my-auto w-[14px] h-[14px]"
                checked={sentiments.includes("neutral")}
                onClick={() => handleSentimentChange("neutral")}
              />
            </div>
            <div className="flex justify-between">
              <p>Negative</p>
              <Checkbox
                className="my-auto w-[14px] h-[14px]"
                checked={sentiments.includes("negative")}
                onClick={() => handleSentimentChange("negative")}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm text-gray-800 font-medium">
            Category
          </AccordionTrigger>
          <AccordionContent className="text-left w-full text-xs text-gray-500">
            <ScrollArea className="h-[calc(100vh-480px)] lg:pl-8 lg:pr-5 px-1">
              {AnnouncementTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 lg:px-0 px-6"
                >
                  <p>{type}</p>
                  <Checkbox
                    className="my-auto w-[14px] h-[14px]"
                    checked={categories.includes((index + 1).toString())}
                    onClick={() => handleCategoryChange((index + 1).toString())}
                  />
                </div>
              ))}
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
