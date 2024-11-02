"use client";
import Image from "next/image";

import { Input } from "antd";
import Logo from "@/app/image/Logo-The-Gioi-Di-Dong-MWG-B-H.webp";
import {
  ListFeatureItem,
  ListFeatures,
  ListProductHeader,
  ProductHeaderItem,
} from "@/utils/listProduct";
import Link from "next/link";
import { Button } from "antd";
import { CiLocationOn } from "react-icons/ci";

import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
const NavBar = () => {
  const { Search } = Input;
  const [showProductHeader, setShowProductHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setShowProductHeader(true);
      } else if (scrollTop > lastScrollTop) {
        setShowProductHeader(false);
      } else if (scrollTop < lastScrollTop) {
        setShowProductHeader(false);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div
      className={`w-full ${`${
        showProductHeader ? "h-24" : "h-[62px]"
      }`} bg-[#ffd400] items-center fixed z-[98]`}
    >
      <div className="w-[1200px] flex items-center m-auto pt-[12px] gap-2">
        <Image src={Logo} width={228} height={40} alt="Picture of the author" />
        <Search
          placeholder="search"
          className="w-2/6 rounded-xl flex items-center"
        />
        {ListFeatures.map((item: ListFeatureItem, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-2 rounded-2xl cursor-pointer hover:bg-[#fe9] transition-all duration-200"
          >
            {item.icon}
            {item.label}
          </div>
        ))}
        <Button
          icon={<CiLocationOn />}
          variant="filled"
          className={styles.location}
          size="large"
        >
          Location
        </Button>
      </div>
      {showProductHeader && (
        <div className="h-11 flex items-center">
          <ul className="flex w-[1200px] m-auto justify-around pb-0 mb-0">
            {ListProductHeader.map((item: ProductHeaderItem, index) => (
              <Link
                href="#"
                key={index}
                className="flex items-center gap-1 px-2 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer hover:bg-[#fe9] transition-all duration-200"
              >
                {item.icon}
                {item.label}
                {item.subIcon && <span>{item.subIcon}</span>}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default NavBar;
