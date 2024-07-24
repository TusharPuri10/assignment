import { Separator } from "@/components/ui/separator"
import { ChevronDown, Search } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Page() {

  return (
    <main className="flex flex-row md:ml-14 ml-0 h-[calc(100vh-82px)]">
      {/* Filter By */}
      <div className="w-[13.8rem] text-black hidden lg:flex flex-col items-center">
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
              <p>Watch List</p>
              <Checkbox className="my-auto"/>
            </div>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm text-gray-800 font-medium">Sentiment</AccordionTrigger>
                <AccordionContent className="text-left w-full py-4 pl-8 pr-5 text-xs text-gray-500 flex flex-col space-y-3">
                <div className="flex justify-between">
                  <p>Positive</p>
                  <Checkbox className="my-auto w-[14px] h-[14px]"/>
                </div>
                <div className="flex justify-between">
                  <p>Neutral</p>
                  <Checkbox className="my-auto w-[14px] h-[14px]"/>
                </div>
                <div className="flex justify-between">
                  <p>Negative</p>
                  <Checkbox className="my-auto w-[14px] h-[14px]"/>
                </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm text-gray-800 font-medium">Category</AccordionTrigger>
                <AccordionContent className="text-left w-full text-xs text-gray-500">
                  <ScrollArea className="h-28 pl-8 pr-5 ">
                    
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p className="break-words w-36">Negativefsaddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                    <div className="flex justify-between py-2">
                      <p>Negative</p>
                      <Checkbox className="my-auto w-[14px] h-[14px]"/>
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
      </div>
      <Separator orientation="vertical" className="bg-gray-200"/>
      {/* Dashboard */}
      <div className="w-screen lg:w-5/6">
          {/* Header */}
          fnasldfj
          <div>

          </div>
          {/* Announcement List */}
          <div>

          </div>
      </div>
    </main>
  );
}
