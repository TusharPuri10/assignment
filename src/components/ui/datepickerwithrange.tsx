'use client'
import {  useState, HTMLAttributes } from "react";
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
	className,
  }: HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = useState<DateRange | undefined>({
		from: addDays(new Date(), -1),
		to:  new Date(),
	})
   
	return (
	  <div className={cn("grid gap-2", className)}>
		<Popover >
		  <PopoverTrigger asChild className="outline-0">
			<Button
			  id="date"
			  variant={"outline"}
			  className={cn(
				"w-fit justify-start text-left font-normal text-xs font-medium px-3",
				!date && "text-muted-foreground"
			  )}
			>
			  <CalendarIcon className="mr-2 h-3 w-3" />
			  {date?.from ? (
				date.to ? (
				  <>
					{format(date.from, "LLL dd, y")} -{" "}
					{format(date.to, "LLL dd, y")}
				  </>
				) : (
				  format(date.from, "LLL dd, y")
				)
			  ) : (
				<span>Pick a date</span>
			  )}
			</Button>
		  </PopoverTrigger>
		  <PopoverContent className="w-auto p-0" align="start">
			<Calendar
			  initialFocus
			  mode="range"
			  defaultMonth={date?.from}
			  selected={date}
			  onSelect={setDate}
			  numberOfMonths={2}
			/>
		  </PopoverContent>
		</Popover>
	  </div>
	)
  }