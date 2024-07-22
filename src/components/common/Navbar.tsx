import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Settings, LogOut, Search } from 'lucide-react';
import Menubar from "./Menubar";



const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between">
            <div className="flex items-start gap-x-2 my-auto">
                 {/* menubar */}
                <Menubar />
                {/* logo */}
                <div className="md:hidden block flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 336.68 336.68"><rect width="336.68" height="336.68" rx="69.65" ry="69.65" style={{ strokeWidth: 0 }}></rect>
                    <path d="M71.21 220.61c-3.27 0-6.55-1.25-9.04-3.75-4.99-4.99-4.99-13.09 0-18.09l66.17-66.17c2.4-2.4 5.65-3.75 9.04-3.75s6.64 1.35 9.04 3.75l43.86 43.86 60.03-60.03c4.99-4.99 13.09-4.99 18.09 0 4.99 4.99 4.99 13.09 0 18.09l-69.08 69.08c-2.4 2.4-5.65 3.75-9.04 3.75s-6.64-1.35-9.04-3.75l-43.86-43.86-57.13 57.13c-2.5 2.5-5.77 3.75-9.04 3.75Z" 
                    style={{ strokeWidth: 0, fill: "rgb(255, 255, 255)" }} 
                    data-darkreader-inline-fill=""></path>
                </svg>
                <span className="text-lg font-semibold">StockInsights</span>
                </div>
            </div>
            <div className="md:space-x-12 space-x-2 md:mx-10 mx-2 flex md:my-6 my-3">
                {/* seachbar */}
                <div className="relative hidden md:flex items-center text-lg md:text-md lg:text-sm">
                    <Search className="absolute ml-2  pointer-none w-4 h-4 text-gray-500 " />
                    <input
                        placeholder="Search Companies"
                        className="md:w-80 w-20 h-7 outline-0 pl-8 outline-none border border-gray-300 rounded-md focus:ring-1 focus:ring-[#B04425] focus:border-transparent "
                    />
                </div>
                {/* username */}
                <DropdownMenu>
                <DropdownMenuTrigger className="flex space-x-2 outline-0 group">
                    <div className="my-auto text-sm flex flex-row">
                       <div className="text-gray-500 font-medium hidden md:inline">Welcome,&nbsp;</div> <div className="font-semibold hidden md:inline">Tushar</div>
                    </div>
                    <div className="flex md:space-x-1 my-auto">
                        <Avatar  className="w-10 h-10 md:w-8 md:h-8">
                            <AvatarImage src="/fallback_avatar.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>  
                        <ChevronDown className="hidden md:block w-3 h-3 text-gray-500 my-auto transition duration-100 group-data-[state=open]:rotate-180"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-semibold p-0 w-60 ml-4">
                    <DropdownMenuLabel className="px-6 py-3 space-y-1">
                        <div>Tushar Puri</div>
                        <div className="font-normal text-gray-500">iamtusharpuri@gmail.com</div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="space-x-2 text-gray-500 hover:text-white px-6 py-3 rounded-none"><Settings className="w-4 h-4"/><span>Account Setting</span></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="space-x-2 text-gray-500 hover:text-white px-6 py-3 rounded-none"><LogOut className="w-4 h-4"/><span>Logout</span></DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default Navbar;