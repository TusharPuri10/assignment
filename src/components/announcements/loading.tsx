import { Skeleton } from "@/components/ui/skeleton"
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table";
export function SkeletonCard() {
  return (
    <TableRow>
        <TableCell><Skeleton className="w-32 pl-11 pr-2 h-12 bg-gray-200" /></TableCell>
        <TableCell className="hidden md:table-cell"><Skeleton className="w-40 h-12 bg-gray-200" /></TableCell>
        <TableCell className="hidden md:table-cell"><Skeleton className="md:flex w-[22rem]  h-16 my-auto bg-gray-200" /></TableCell>
        <TableCell><Skeleton className="my-auto h-6 w-6 ml-[2.2rem] mr-[1rem] rouned-full bg-gray-200" /></TableCell>
        <TableCell className="hidden md:table-cell"><Skeleton className="md:flex w-28 mr-4 h-12 my-auto bg-gray-200" /></TableCell>
        <TableCell className="md:hidden"><Skeleton className=" my-auto h-6 rouned-full bg-gray-200" /></TableCell>
    </TableRow>
  )
}
