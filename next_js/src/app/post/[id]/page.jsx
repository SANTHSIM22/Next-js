"use client";
import { usePathname } from "next/navigation";
export default function post(){
       const pathname=usePathname();
       return <p>{pathname}</p>    // its returning or displaying the string of the path  we choosed eg: path is /post/1234......it will display /post/1234 in the website
}