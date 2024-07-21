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
import { Input } from "@/components/ui/input"


const Navbar = () => {
    return (
        <nav className="flex flex-row-reverse">
            <div className="space-x-12 mx-10 flex my-6">
                {/* seachbar */}
                <div className="relative flex items-center">
                    <Search className="absolute ml-2 my-auto pointer-none w-4 h-4 text-gray-500" />
                    <input
                        placeholder="Search Companies"
                        className="w-80 h-8 outline-0 pl-8 outline-none border border-gray-300 rounded-md focus:ring-1 focus:ring-[#B04425] focus:border-transparent"
                    />
                </div>
                {/* username */}
                <DropdownMenu>
                <DropdownMenuTrigger className="flex space-x-2 outline-0 group">
                    <div className="my-auto text-sm flex">
                       <div className="text-gray-500 font-medium">Welcome,&nbsp;</div> <div className="font-semibold">Tushar</div>
                    </div>
                    <div className="flex space-x-1 my-auto">
                        <Avatar  className="w-8 h-8">
                            <AvatarImage src="/fallback_avatar.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>  
                        <ChevronDown className="w-3 h-3 text-gray-500 my-auto transition duration-100 group-data-[state=open]:rotate-180"/>
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