"use client";
import Image from "next/image";
import Link from "next/link";

import { ListImage } from "@/app/constants/listImage";
const SpecialOffer = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Gian hàng ưu đãi</h1>
      <div className="flex gap-3">
        {ListImage.map((item) => (
          <Link href="#">
            <Image src={item.src} alt={item.alt} width={328} height={522} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
