'use client';
import { Menu } from 'lucide-react';
import { Sparkles, Search, Megaphone, Heart, Mail, EllipsisVertical, ChevronUp, Bug, ArchiveRestore, MessageSquare } from 'lucide-react';
import NextTopLoader from 'nextjs-toploader';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

const Card = (props: { icon: React.JSX.Element, title: string, path: string, isOpen?: boolean, setIsOpen?: Dispatch<SetStateAction<boolean>>, type: string }) => {
    const path = usePathname();
    const maincssClass = `flex flex-row space-x-10 my-2 text-gray-500 hover:text-gray-500 hover:bg-[#F0F0F0] rounded-md outline-0 group ${path === props.path && props.title !== "StockInsights" ? "bg-[#F0F0F0] text-gray-800 font-bold" : ""}  ${props.type === "sheet" ? "font-semibold" : ""}`;
    const textcssClass = `opacity-0 visibility group-hover:opacity-100 group-hover:visibility-visible ${props.isOpen ? "opacity-100 visibility-visible" : ""} ${props.title === "Options" ? "font-semibold" : ""} text-sm my-[9px] transition-opacity duration-200 ease-in-out  `;
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
 return (
    <div className={`${ props.type==="hover" && `group hover:w-44 hover:shadow-xl  ${isOpen ? "w-44 shadow-xl":"w-14"} transition-all duration-200 ease-in-out px-2`}`}>
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
        <Card icon={<Sparkles className='m-3 fixed w-4 h-4 text-[#B04425]' />} title="AI&nbsp;Assist" path={`/${props.countrycode}/ai-assist`} isOpen={isOpen || props.type === "sheet"} type={props.type} />
        <Card icon={<Search className='m-3 fixed w-4 h-4'/>} title="Search&nbsp;Fillings" path={`/${props.countrycode}/filings`} isOpen={isOpen || props.type==="sheet"} type={props.type} />
        { props.type==="sheet" && <div className='text-gray-400 text-[10px]'>Views</div>}
        <Card icon={<Megaphone className='m-3 fixed w-4 h-4'/>} title="Announcements" path={`/${props.countrycode}/announcements`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
        { props.type==="sheet" && <div className='text-gray-400 text-[10px]'>Tools</div>}
        <Card icon={<Heart className='m-3 fixed w-4 h-4'/>} title="My&nbsp;Watchlist" path={`/${props.countrycode}/watchlist`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
        <Card icon={<Mail className='m-3 fixed w-4 h-4'/>} title="Email&nbsp;Updates" path={`/${props.countrycode}/notifications`} isOpen={isOpen || props.type==="sheet"} type={props.type}/>
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
            <div className='absolute top-0 w-screen h-fit z-10'><NextTopLoader color='#B04425' showSpinner={false} crawl={false} /></div>
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
            <div className='absolute h-screen w-fit left-0 top-0 flex flex-row bg-[#FCFCFC] hidden md:flex'>
                <MenuItems countrycode={props.countrycode} type="hover"/>
                <Separator orientation="vertical" className="bg-gray-200"/>
            </div>
        </div>
      )
}

export default Menubar;