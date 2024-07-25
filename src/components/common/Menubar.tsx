'use client';
import { Menu } from 'lucide-react';
import { EllipsisVertical, ChevronUp, Bug, ArchiveRestore, MessageSquare } from 'lucide-react';
import NextTopLoader from 'nextjs-toploader';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { addDays, format } from "date-fns"

const Card = (props: { icon: React.JSX.Element, title: string, path: string, isOpen?: boolean, setIsOpen?: Dispatch<SetStateAction<boolean>>, type: string }) => {
    const path = usePathname();
    const maincssClass = `h-10 flex flex-row space-x-10 my-[7px] text-gray-500 hover:text-gray-500 hover:bg-[#F0F0F0] rounded-md outline-0 group ${props.path.includes(path) && props.title !== "StockInsights" ? "bg-[#F0F0F0] text-gray-800 font-bold" : ""}  ${props.type === "sheet" ? "font-semibold" : ""}`;
    const textcssClass = `transition-opacity duration-200 ease-in-out text-sm my-[9px] ${props.title === "Options" ? "font-semibold" : ""} ${props.isOpen ? "opacity-100 visible" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible`;
    return (
        ( props.title!=="Options" ?
        conditionalWrapper(props.type==="sheet",
        <Link href={props.path} className={maincssClass}>
            {props.icon} 
            {!(props.type==="sheet" && props.title==="StockInsights" ) && <span className={textcssClass}>{props.title}</span>}
        </Link>
        )
        :
        <DropdownMenu onOpenChange={(open)=>{ if(props.setIsOpen) props.setIsOpen(open)}}>
            <DropdownMenuTrigger className={maincssClass}>
                {props.icon} 
                <span className={textcssClass}>{props.title}</span>
                <div className={textcssClass}>
                    <ChevronUp className="hidden md:block w-4 h-4 mr-3 text-gray-500 transition duration-100 group-data-[state=open]:rotate-180"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-semibold p-0 w-fit">
                <DropdownMenuItem className="space-x-2 text-gray-500 hover:text-white font-normal px-6 py-3 rounded-none"><Bug className="w-4 h-4"/><span>Report a bug</span></DropdownMenuItem>
                <DropdownMenuItem className="space-x-2 text-gray-500 hover:text-white font-normal px-6 py-3 rounded-none"><ArchiveRestore className="w-4 h-4"/><span>Request a feature</span></DropdownMenuItem>
                <DropdownMenuItem className="space-x-2 text-gray-500 hover:text-white font-normal px-6 py-3 rounded-none"><MessageSquare className="w-4 h-4"/><span>Write a review</span></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        )
    )
}

const conditionalWrapper = (condition: boolean, children: React.ReactNode) => condition ? <SheetClose asChild>{children}</SheetClose> : children ;

const MenuItems  = (props: {countrycode: string, type: string}) => {

const [isOpen, setIsOpen] = useState(false);
const today = new Date();
const yesterday = addDays(new Date(), -1);
const formattedToday = format(today, 'yyyy-MM-dd');
const formattedYesterday = format(yesterday, 'yyyy-MM-dd');
 return (
    <div className={`${ props.type==="hover" && `group hover:w-44 hover:shadow-xl ${isOpen ? "w-44 shadow-xl":"w-14"} transition-all duration-200 ease-in-out px-2`}`}>
        {/* Logo */}
        <div className='mt-7 mb-16'>
            <Card icon={
                <svg className='m-2 fixed' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 336.68 336.68">
                    <rect width="336.68" height="336.68" rx="69.65" ry="69.65" style={{ strokeWidth: 0 }}></rect>
                    <path d="M71.21 220.61c-3.27 0-6.55-1.25-9.04-3.75-4.99-4.99-4.99-13.09 0-18.09l66.17-66.17c2.4-2.4 5.65-3.75 9.04-3.75s6.64 1.35 9.04 3.75l43.86 43.86 60.03-60.03c4.99-4.99 13.09-4.99 18.09 0 4.99 4.99 4.99 13.09 0 18.09l-69.08 69.08c-2.4 2.4-5.65 3.75-9.04 3.75s-6.64-1.35-9.04-3.75l-43.86-43.86-57.13 57.13c-2.5 2.5-5.77 3.75-9.04 3.75Z" 
                    style={{ strokeWidth: 0, fill: "rgb(255, 255, 255)" }}></path>
                </svg>
            } title="StockInsights" path={`/${props.countrycode}/ai-assist`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
        </div>
        {/* other items */}
        { props.type==="sheet" && <div className='text-gray-400 text-[10px]'>Explore Fillings</div>}
        <Card icon={<div className='my-[9px] mx-[12px] fixed  text-[#B04425]' ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="none"><path stroke="#B04425" strokeWidth="1.5" d="m6.005 13.105 1.127-2.403a1.25 1.25 0 0 1 .618-.608L10.175 9 7.75 7.907a1.25 1.25 0 0 1-.618-.608L6.005 4.896 4.9 7.292a1.25 1.25 0 0 1-.625.617L1.835 9l2.44 1.091m1.73 3.013-1.73-3.013m1.73 3.013L4.9 10.71a1.25 1.25 0 0 0-.625-.617m1.73 3.013-1.73-3.013m1.502 3.5Z"></path><path fill="#B04425" d="m12.867 4.212-.41.874a.5.5 0 0 1-.907-.002l-.401-.87a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.912l.88-.394a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.002l.41.874a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .912l-.875.394a.5.5 0 0 0-.248.244M12.867 15.977l-.41.874a.5.5 0 0 1-.907-.003l-.401-.869a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.913l.88-.393a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.003l.41.875a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .911l-.875.395a.5.5 0 0 0-.248.243"></path></svg></div>} 
        title="AI&nbsp;Assist" path={`/${props.countrycode}/ai-assist`} isOpen={isOpen || props.type === "sheet"} type={props.type} />

        <Card icon={<div className='my-[10px] mx-[14px] fixed text-gray-500' ><svg width="14" height="18" viewBox="0 0 14 15" fill="none"><path d="M10.625 14L8.04182 11.4168M8.04182 11.4168C8.8154 10.6432 9.25 9.59402 9.25 8.5C9.25 7.40598 8.8154 6.35677 8.04182 5.58318C7.26823 4.8096 6.21902 4.375 5.125 4.375C4.5833 4.375 4.0469 4.4817 3.54643 4.689C3.04596 4.8963 2.59123 5.20014 2.20818 5.58318C1.82514 5.96623 1.5213 6.42096 1.314 6.92143C1.1067 7.4219 1 7.9583 1 8.5C1 9.0417 1.1067 9.5781 1.314 10.0786C1.5213 10.579 1.82514 11.0338 2.20818 11.4168C2.59123 11.7999 3.04596 12.1037 3.54643 12.311C4.0469 12.5183 4.5833 12.625 5.125 12.625C6.21902 12.625 7.26823 12.1904 8.04182 11.4168Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round"></path><path d="M12.6991 2.62522L12.0875 2.92731L12.3674 2.68369L12.3752 2.67688L12.3828 2.66975C12.4274 2.6275 12.4649 2.57866 12.4941 2.52518L12.6991 2.62522ZM10.6323 4.69933L10.3115 4.05766L10.5507 4.33255C10.5744 4.36562 10.607 4.40349 10.6508 4.43864C10.6775 4.4601 10.7051 4.47806 10.733 4.49293L10.6323 4.69933ZM10.625 0.550448L10.9173 1.14219L10.6913 0.882582L10.6761 0.8651L10.6594 0.8491C10.6191 0.810691 10.5736 0.778727 10.5245 0.754021L10.625 0.550448ZM8.5509 2.63264L9.17784 2.32289L8.92417 2.54364C8.89096 2.56759 8.85253 2.60091 8.81699 2.64577C8.79411 2.67465 8.7753 2.70449 8.76003 2.73465L8.5509 2.63264Z" fill="#71717A" stroke="#71717A"></path></svg></div>} 
        title="Search&nbsp;Fillings" path={`/${props.countrycode}/filings`} isOpen={isOpen || props.type==="sheet"} type={props.type} />

        { props.type==="sheet" && <div className='text-gray-400 text-[10px]'>Views</div>}

        <Card icon={<div className='my-[9px] mx-[12px] fixed text-gray-500' ><svg width="16" height="22" viewBox="0 0 16 14" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.0315 1.53558V4.03392C13.3335 4.03392 13.6326 4.0934 13.9116 4.20898C14.1906 4.32455 14.4441 4.49395 14.6577 4.70751C14.8712 4.92106 15.0406 5.17459 15.1562 5.45361C15.2718 5.73263 15.3313 6.03169 15.3313 6.3337C15.3313 6.63571 15.2718 6.93477 15.1562 7.21379C15.0406 7.49281 14.8712 7.74634 14.6577 7.9599C14.4441 8.17345 14.1906 8.34285 13.9116 8.45843C13.6326 8.574 13.3335 8.63349 13.0315 8.63349V10.9333C13.0315 12.1966 11.5895 12.918 10.5784 12.1598L8.99921 10.9747C8.15508 10.3417 7.17222 9.91916 6.13214 9.74198V11.9222C6.13223 12.4233 5.95115 12.9076 5.62228 13.2858C5.29342 13.6639 4.83894 13.9105 4.34262 13.9799C3.8463 14.0494 3.3416 13.9371 2.92155 13.6638C2.50151 13.3904 2.19443 12.9744 2.05693 12.4925L0.853372 8.27932C0.42026 7.76784 0.138397 7.14569 0.0394683 6.48281C-0.0594608 5.81993 0.0284651 5.14259 0.293363 4.52694C0.55826 3.91129 0.989628 3.38173 1.53898 2.99778C2.08832 2.61384 2.73388 2.39073 3.40307 2.35354L5.71665 2.22475C6.84862 2.16176 7.94947 1.83098 8.92868 1.25961L10.7256 0.210909C11.7482 -0.384735 13.0315 0.351963 13.0315 1.53558ZM2.78519 9.45988L3.53109 12.0717C3.56698 12.1981 3.64741 12.3073 3.75752 12.379C3.86763 12.4508 3.99998 12.4802 4.13013 12.462C4.26028 12.4438 4.37945 12.3791 4.46562 12.2799C4.55179 12.1807 4.59915 12.0536 4.59895 11.9222V9.61473L3.40307 9.54803C3.19495 9.53649 2.98823 9.50699 2.78519 9.45988ZM11.4983 1.53558L9.70064 2.58505C8.60853 3.22167 7.39075 3.61251 6.13214 3.73035V8.19116C7.50205 8.37974 8.80603 8.91406 9.91912 9.74812L11.4983 10.9333V1.53558ZM4.59895 3.82234L3.48739 3.88366C2.97028 3.91222 2.48267 4.13359 2.12079 4.50409C1.75892 4.87458 1.5491 5.36728 1.53273 5.88492C1.51636 6.40255 1.69465 6.90752 2.03239 7.30014C2.37014 7.69275 2.8428 7.94448 3.35707 8.00564L3.48739 8.01714L4.59895 8.07847V3.82234ZM13.0315 5.56711V7.1003C13.2269 7.10008 13.4148 7.02526 13.5569 6.89113C13.699 6.757 13.7845 6.57368 13.7959 6.37863C13.8074 6.18357 13.7439 5.99151 13.6185 5.84168C13.4931 5.69184 13.3152 5.59555 13.1212 5.57247L13.0315 5.56711Z" fill="#71717A"></path></svg></div>} 
        title="Announcements" path={`/${props.countrycode}/announcements?page=1&from_date=${formattedYesterday}&to_date=${formattedToday}`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>

        { props.type==="sheet" && <div className='text-gray-400 text-[10px]'>Tools</div>}

        <Card icon={<div className='my-[9px] mx-[12px] fixed w-4 h-4 text-gray-500' ><svg width="16" height="22" viewBox="0 0 16 14" fill="none"><path d="M7.70572 11.8638L7.62943 11.9401L7.5455 11.8638C3.92153 8.57548 1.52589 6.40109 1.52589 4.19619C1.52589 2.6703 2.6703 1.52589 4.19619 1.52589C5.37112 1.52589 6.51553 2.28883 6.91989 3.32643H8.33896C8.74332 2.28883 9.88774 1.52589 11.0627 1.52589C12.5886 1.52589 13.733 2.6703 13.733 4.19619C13.733 6.40109 11.3373 8.57548 7.70572 11.8638ZM11.0627 0C9.73515 0 8.46103 0.617984 7.62943 1.58692C6.79782 0.617984 5.52371 0 4.19619 0C1.84632 0 0 1.83869 0 4.19619C0 7.07248 2.59401 9.42997 6.52316 12.9929L7.62943 14L8.73569 12.9929C12.6648 9.42997 15.2589 7.07248 15.2589 4.19619C15.2589 1.83869 13.4125 0 11.0627 0Z" fill="#71717A"></path></svg></div>} 
        title="My&nbsp;Watchlist" path={`/${props.countrycode}/watchlist`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
        
        <Card icon={<div className='my-[9px] mx-[12px] fixed w-4 h-4 text-gray-500' ><svg width="14" height="22" viewBox="0 0 15 12" fill="none"><path d="M15 1.5C15 0.675 14.325 0 13.5 0H1.5C0.675 0 0 0.675 0 1.5V10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5ZM13.5 1.5L7.5 5.25L1.5 1.5H13.5ZM13.5 10.5H1.5V3L7.5 6.75L13.5 3V10.5Z" fill="#71717A"></path></svg></div>} 
        title="Email&nbsp;Updates" path={`/${props.countrycode}/notifications`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
        {/* option */}
        <div className='absolute bottom-1'>
        <Card icon={<EllipsisVertical className='m-3 ml-[14px] fixed w-4 h-4'/>} title="Options" path='' isOpen={isOpen || props.type==="sheet"} setIsOpen={setIsOpen} type={props.type}/>
        </div>
    </div>
 )
}

const Menubar = (props: {countrycode: string}) => {
    return (
        <div>
            {/* top loader */}
            <div className='absolute top-0 w-screen h-fit z-20'><NextTopLoader color='#B04425' showSpinner={false} crawl={false} /></div>
            {/* for mobile screen */}
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger asChild className='ml-2 mr-3'>
                        <Menu/>
                    </SheetTrigger>
                    <SheetContent side={"left"} className="w-[248px] px-[14px] pt-[12px]">
                        <MenuItems countrycode={props.countrycode} type="sheet"/>    
                    </SheetContent>
                </Sheet>
            </div>
            {/* for laptop */}
            <div className='absolute h-screen w-fit left-0 top-0 flex flex-row bg-[#FCFCFC] z-20 hidden md:flex'>
                <MenuItems countrycode={props.countrycode} type="hover"/>
                <Separator orientation="vertical" className="bg-gray-200"/>
            </div>
        </div>
      )
}

export default Menubar;