"use client";

import { ListSearch } from "@/app/constants/listSearch";
import Link from "next/link";

const PeopleAlsoSearch = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h1 className="text-xl font-bold">Mọi người cũng tìm kiếm</h1>
      <div className="flex flex-wrap">
        {ListSearch.map((item) => (
          <Link
            key={item}
            href=""
            className="text-[#1d2939] w-fit block bg-[#f2f4f7] py-[2px] px-2 mt-[10px] mr-2 mb-0 ml-0 rounded-2xl"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default PeopleAlsoSearch;
