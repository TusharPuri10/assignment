import { Menu } from 'lucide-react';
import { Sparkles, Search, Megaphone, Heart, Mail } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const Card = (props: { icon: React.JSX.Element, title: string, top: number, bottom: number }) => {
    return (
        <div className={`flex space-x-10 ${props.top===props.bottom ?  `my-${props.bottom}` : `mt-${props.top} mb-${props.bottom}`} my-2 text-gray-500  hover:bg-[#F0F0F0] rounded-md`}>
            {props.icon}
            <span className="opacity-0 group-hover:opacity-100 text-sm my-[9px] text-gray-500 transition-opacity duration-200 ease-in-out visibility group-hover:visibility-visible">{props.title}</span>
        </div>
    )
}



const Menubar = () => {
    return (
        <div>
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger asChild className='ml-2 mr-3'>
                        <Menu/>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            
            <div className='absolute h-screen w-fit left-0 top-0 flex flex-row bg-[#FCFCFC] hidden md:flex'>
            <div className="group w-14 hover:w-44 transition-all duration-200 ease-in-out hover:shadow-xl px-2">
                {/* Logo */}

                <Card icon={
                    <svg className='m-2 fixed' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 336.68 336.68">
                        <rect width="336.68" height="336.68" rx="69.65" ry="69.65" style={{ strokeWidth: 0 }}></rect>
                        <path d="M71.21 220.61c-3.27 0-6.55-1.25-9.04-3.75-4.99-4.99-4.99-13.09 0-18.09l66.17-66.17c2.4-2.4 5.65-3.75 9.04-3.75s6.64 1.35 9.04 3.75l43.86 43.86 60.03-60.03c4.99-4.99 13.09-4.99 18.09 0 4.99 4.99 4.99 13.09 0 18.09l-69.08 69.08c-2.4 2.4-5.65 3.75-9.04 3.75s-6.64-1.35-9.04-3.75l-43.86-43.86-57.13 57.13c-2.5 2.5-5.77 3.75-9.04 3.75Z" 
                        style={{ strokeWidth: 0, fill: "rgb(255, 255, 255)" }}></path>
                    </svg>
                } title="StockInsights" top={7} bottom={7}/>
                <Card icon={<Sparkles className='m-3 fixed w-4 h-4 text-[#B04425]'/>} title="AI&nbsp;Assist" top={16} bottom={2}/>
                <Card icon={<Search className='m-3 fixed w-4 h-4'/>} title="Search&nbsp;Fillings" top={2} bottom={2}/>
                <Card icon={<Megaphone className='m-3 fixed w-4 h-4'/>} title="Announcements" top={2} bottom={2}/>
                <Card icon={<Heart className='m-3 fixed w-4 h-4'/>} title="My&nbsp;Watchlist" top={2} bottom={2}/>
                <Card icon={<Mail className='m-3 fixed w-4 h-4'/>} title="Email&nbsp;Updates" top={2} bottom={2}/>

            </div>
                <Separator orientation="vertical" className="bg-gray-200"/>
            </div>
        </div>
        
      )
}

export default Menubar;