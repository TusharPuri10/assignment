"use client"
import { Announcement } from "@/lib/interface";
import { Separator } from "@/components/ui/separator";
import { Search, ListFilter, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { DatePickerWithRange } from "@/components/ui/datepickerwithrange";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useSearchParams } from 'next/navigation'


const Main = (props: {data: Announcement[], countrycode: string}) => {

    const searchParams = useSearchParams()
  
    const page = parseInt(searchParams.get('page') || "1");
    const itemsPerPage = 10;
    const startIndex = ((page) - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const from_date = searchParams.get('from_date');
    const to_date = searchParams.get('to_date');
    const generateLink = (page: number) => {
      return `/${props.countrycode}/announcements?page=${page}&from_date=${from_date}&to_date=${to_date}`;
    };
    const AnnouncementTypes = [
        "Company Mergers",
        "Disposals and divestitures",
        "Business Restructuring",
        "Expansion Plans",
        "Financial Troubles",
        "Management Changes",
        "Capital Structure Changes",
        "Contract Awards",
        "Legal Disputes",
        "Payment Defaults",
        "Credit Rating Changes",
        "Product Launches",
        "Operational Disruptions",
        "Accounting Changes",
        "Investments/Divestments",
        "Dividend Policy Changes",
        "Labor Issues",
        "Investor Conferences",
        "Earnings Reports",
        "Delisting Actions",
        "IPO Launches",
        "Name Changes",
        "Offer for Sale",
        "US FDA Inspections",
        "Earnings Calls",
        "Other Situations",
      ];

      const [openRow, setOpenRow] = useState<string | null>(null);

      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      };

    return (
        <main className="h-[calc(100vh-82px)] flex md:ml-14 ml-0">
        <div className="w-[13.8rem] text-black hidden lg:flex flex-col items-center fixed z-10">
          <div className="text-left w-full px-8 py-6 text-sm font-medium text-gray-700">
            Filter by
          </div>
          <div className="py-5">
            <Search className="absolute ml-3 mt-[14px] z-0 pointer-none w-3 h-3 text-gray-400 " />
            <input
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
                  <Checkbox className="my-auto w-[14px] h-[14px]" />
                </div>
                <div className="flex justify-between">
                  <p>Neutral</p>
                  <Checkbox className="my-auto w-[14px] h-[14px]" />
                </div>
                <div className="flex justify-between">
                  <p>Negative</p>
                  <Checkbox className="my-auto w-[14px] h-[14px]" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm text-gray-800 font-medium">
                Category
              </AccordionTrigger>
              <AccordionContent className="text-left w-full text-xs text-gray-500">
                <ScrollArea className="h-[calc(100vh-480px)] pl-8 pr-5 ">
                  {AnnouncementTypes.map((type, index) => (
                    <div key={index} className="flex justify-between py-2">
                      <p>{type}</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]" />
                    </div>
                  ))}
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
        </div>
        
        {/* Dashboard */}
        <ScrollArea className="h-[calc(100vh-82px)] z-0">
        <div className="lg:ml-[13.8rem] ml-0  w-screen lg:w-5/6">
        <Separator orientation="vertical" className="bg-gray-200 fixed" />
          {/* Header */}
          <div className="sm:px-16 md:px-[3.2rem] px-4 pt-7 pb-5 space-y-2">
            <div className="flex md:flex-row md:space-x-8 md:space-y-0 flex-col space-y-3 py-1">
              <div className="flex flex-row space-x-3">
                <div className="font-semibold text-gray-600">
                  Announcements Dashboard
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="my-auto"
                    width="15"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#B04425"
                      strokeWidth="1.5"
                      d="m6.005 13.105 1.127-2.403a1.25 1.25 0 0 1 .618-.608L10.175 9 7.75 7.907a1.25 1.25 0 0 1-.618-.608L6.005 4.896 4.9 7.292a1.25 1.25 0 0 1-.625.617L1.835 9l2.44 1.091m1.73 3.013-1.73-3.013m1.73 3.013L4.9 10.71a1.25 1.25 0 0 0-.625-.617m1.73 3.013-1.73-3.013m1.502 3.5Z"
                    ></path>
                    <path
                      fill="#B04425"
                      d="m12.867 4.212-.41.874a.5.5 0 0 1-.907-.002l-.401-.87a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.912l.88-.394a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.002l.41.874a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .912l-.875.394a.5.5 0 0 0-.248.244M12.867 15.977l-.41.874a.5.5 0 0 1-.907-.003l-.401-.869a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.913l.88-.393a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.003l.41.875a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .911l-.875.395a.5.5 0 0 0-.248.243"
                    ></path>
                  </svg>
                  <p className="mx-2 text-sm font-medium text-gray-500 my-auto">
                    AI-Powered
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
                <div className="flex outline outline-1 outline-dashed outline-gray-300 rounded-sm h-fit px-1 my-auto">
                  <ListFilter className="my-auto w-3.5 h-3.5" />
                  <p className="my-auto text-xs font-medium text-gray-600 px-1">
                    Filter
                  </p>
                </div>
                <div className="text-sm font-medium text-gray-500 my-auto">
                  Filtered Announcements: 809
                </div>
              </div>  
            </div>
            <div className="flex md:flex-row md:space-x-8 md:space-y-0 flex-col space-y-3">
              <DatePickerWithRange />
              <div className="text-xs flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto"
                  width="16"
                  height="12"
                  fill="none"
                >
                  <path
                    stroke="#16A34A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.05 10.95a7 7 0 0 1 0-9.9m9.9 0a7 7 0 0 1 0 9.9m-7.7-2.2a3.89 3.89 0 0 1 0-5.5m5.5 0a3.89 3.89 0 0 1 0 5.5M8.778 6a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0"
                  ></path>
                </svg>
                <p className="my-auto font-medium">Updates every 15 minutes</p>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-200" />
          {/* Table  */}
          <Table className="text-gray-800">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-gray-800 px-1 md:px-5 w-28">Company</TableHead>
                <TableHead className="text-gray-800 hidden md:table-cell">Category</TableHead>
                <TableHead className="text-gray-800 hidden md:table-cell">Summary</TableHead>
                <TableHead className="text-center px-1 md:px-4 text-gray-800">Sentiment</TableHead>
                <TableHead className="px-1 md:px-4 text-gray-800 hidden md:table-cell">Source</TableHead>
                <TableHead className="text-center px-1 md:px-4 text-gray-800 md:hidden">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {props.data.slice(startIndex, endIndex).map((announcement) => (
          <Fragment key={announcement._id.$oid}>
            <TableRow onClick={() => setOpenRow(openRow === announcement._id.$oid ? null : announcement._id.$oid)} className="cursor-pointer">
              <TableCell className="text-left text-sm text-gray-900 w-28 space-y-2 pl-11 pr-2">
                <div className="md:w-28 w-fit break-words">{announcement.company_name}</div>
                <div className="block md:hidden px-2 py-1 font-medium outline outline-1 outline-gray-300 w-fit rounded-md bg-gray-100 text-xs">
                  {AnnouncementTypes[Number(announcement.type_id) - 1]}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="text-center px-4 py-1 font-medium outline outline-1 outline-gray-300 w-fit rounded-md bg-gray-100">
                  {AnnouncementTypes[Number(announcement.type_id) - 1]}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div style={{ lineHeight: '1.6em' }}>
                  <div className="text-gray-800 font-medium">{announcement.sub_type}</div>
                  <div className="text-gray-600">{announcement.summary}</div>
                </div>
              </TableCell>
              <TableCell className="px-1 md:px-4">
                {announcement.sentiment === "positive" && (
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <rect width="20" height="20" fill="#16A34A" fillOpacity="0.11" rx="10"></rect>
                    <rect width="8" height="8" x="6" y="6" fill="#16A34A" rx="4"></rect>
                  </svg>
                )}
                {announcement.sentiment === "neutral" && (
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <rect width="20" height="20" fill="#EAB308" fillOpacity="0.11" rx="10"></rect>
                    <rect width="8" height="8" x="6" y="6" fill="#EAB308" rx="4"></rect>
                  </svg>
                )}
                {announcement.sentiment === "negative" && (
                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <rect width="20" height="20" fill="#EF4444" fillOpacity="0.11" rx="10"></rect>
                    <rect width="8" height="8" x="6" y="6" fill="#EF4444" rx="4"></rect>
                  </svg>
                )}
              </TableCell>
              <TableCell className="px-1 md:px-4  hidden md:table-cell">
                <div className="space-y-3 w-fit">
                  <Link href={announcement.source_url} target="_blank" className="flex space-x-2 md:mr-[3.3rem] p-2 rounded-md outline outline-1 outline-gray-300">
                    <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                      <path stroke="#71717A" d="M1.999 4.5V.7c0-.11.09-.2.2-.2h6.968a.2.2 0 0 1 .142.059L10.94 2.19a.2.2 0 0 1 .059.142V11.3a.2.2 0 0 1-.2.2H1.5m7-11v2.3c0 .11.09.2.2.2H11M7.75 9.5V6.2c0-.11.09-.2.2-.2h1.8m-2 1.75h1.5M1.75 6H1.2a.2.2 0 0 0-.2.2v2.738c0 .034.028.062.063.062a.06.06 0 0 0 .062-.062V8.2c0-.11.09-.2.2-.2h.425c1 0 1.125-.625 1.125-1S2.75 6 1.75 6Zm3.353 0H4.45a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h.652c.569 0 1.148-.25 1.148-1.5S5.671 6 5.103 6Z"></path>
                    </svg>
                    <p className="text-xs font-medium">Source</p>
                  </Link>
                  <p className="text-[10px] font-medium">{formatDate(announcement.created_at.$date)}</p>
                </div>
              </TableCell>
              <TableCell className="items-center px-2 md:hidden">
                <ChevronDown className={`w-3 h-3 text-gray-500 my-auto mx-auto transition duration-100 ${openRow!==null ? "rotate-180" : ""} `} />
              </TableCell>
            </TableRow>
            {openRow === announcement._id.$oid && (
              <TableRow>
              <TableCell colSpan={6} className="md:hidden p-10 bg-gray-100 space-y-2">
                <div className="text-gray-800 font-medium">{announcement.sub_type}</div>
                <div className="text-gray-600">{announcement.summary}</div>
                <div className="space-y-3 w-fit">
                <div className="flex space-x-2">
                  <Link href={announcement.source_url} target="_blank" className="flex space-x-2 md:mr-[3.3rem] p-2 rounded-md outline outline-1 outline-gray-300">
                    <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                      <path stroke="#71717A" d="M1.999 4.5V.7c0-.11.09-.2.2-.2h6.968a.2.2 0 0 1 .142.059L10.94 2.19a.2.2 0 0 1 .059.142V11.3a.2.2 0 0 1-.2.2H1.5m7-11v2.3c0 .11.09.2.2.2H11M7.75 9.5V6.2c0-.11.09-.2.2-.2h1.8m-2 1.75h1.5M1.75 6H1.2a.2.2 0 0 0-.2.2v2.738c0 .034.028.062.063.062a.06.06 0 0 0 .062-.062V8.2c0-.11.09-.2.2-.2h.425c1 0 1.125-.625 1.125-1S2.75 6 1.75 6Zm3.353 0H4.45a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h.652c.569 0 1.148-.25 1.148-1.5S5.671 6 5.103 6Z"></path>
                    </svg>
                    <p className="text-xs font-medium">Source</p>
                  </Link>
                  <p className="text-[10px] font-medium my-auto">{formatDate(announcement.created_at.$date)}</p>
                </div>
              </div>
              </TableCell>
            </TableRow>
            )}
          </Fragment>
        ))}
            </TableBody>
          </Table>
          <Separator className="bg-gray-200" />
          {/* Page Number */}
          <div className="my-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem className={` ${page===1 ? "pointer-events-none text-gray-300" : ""}`}>
                <PaginationPrevious href={generateLink(page-1)} />
              </PaginationItem>
              <PaginationItem >
                <PaginationLink href={generateLink(page>2? page-1 : 1)} isActive={page===1} className={` ${page===1 ? "bg-gray-100" : ""}`}>
                  {page>2? page-1 : 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={generateLink(page>2? page : 2)} isActive={(page!==1)} className={` ${page!==1 ? "bg-gray-100" : ""}`}>
                {page>2? page : 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={generateLink(page>2? page+1 : 3)}>
                  {page>2? page+1 : 3}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href={generateLink(page+1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          </div>
        </div>
        </ScrollArea>
      </main>
    )
}

export default Main