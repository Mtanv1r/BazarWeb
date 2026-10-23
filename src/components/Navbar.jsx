import Link from "next/link";
import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <>
     <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-base font-bold text-white sm:h-9 sm:w-9 sm:text-lg">
        L
          </span>
          <span className="text-lg font-semibold text-gray-900 sm:text-xl">
          বাজার দর
          </span>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href={"/signin"}>
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 sm:px-4 sm:py-2 sm:text-sm"
          >
         সাইন ইন
          </button>
          </Link>
      
          <Link href={"/signup"}>
           <button
            type="button"
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-700 sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন আপ
          </button>
          </Link>
          {/* <button
            type="button"
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-700 sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন আপ
          </button> */}
        </div>
      </div>
    </nav>
    <Navlink></Navlink>
    </>
   
  );
}