"use client";
import { Card } from "antd";
import Image from "next/image";
import { Rate, Flex } from "antd";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
export type DataCardItem = {
  id: number;
  src: string;
  name: string;
  technique: string;
  size: string;
  category: string;
  isOnlineOnly: boolean;
  price: string;
  discountedPrice: string;
  rating: number;
  resolution: string;
};
export type CardItemProps = {
  dataItem: DataCardItem;
};

const CardItem: React.FC<CardItemProps> = ({ dataItem }) => {
  const router = useRouter();
  const name = dataItem.name.split(" ").join("-");
  return (
    <Card
      onClick={() => {
        router.push(`/product/${dataItem.category}/${name}/${dataItem.id}`);
      }}
      className="h-full"
      bordered
      hoverable
      cover={
        <div className="relative overflow-hidden">
          <Image
            src={dataItem.src}
            width={600}
            height={600}
            alt="image"
            objectFit="contain"
            quality={100}
            className="max-h-[95%] transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] pt-4"
          />
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="hover:text-blue-400">{`${dataItem.name} ${dataItem.technique}`}</div>
        <div className="flex gap-1">
          <span className="bg-[#f2f4f7] border-none text-[#667085] px-1 py-0 w-fit rounded whitespace-nowrap">
            {dataItem.resolution}
          </span>
          <span className="bg-[#f2f4f7] border-none text-[#667085] px-1 py-0 w-fit rounded whitespace-nowrap">
            {dataItem.size}
          </span>
        </div>
        <span className="text-red-600 text-lg font-semibold">
          {formatPrice(dataItem.discountedPrice)}
        </span>
        <span className="line-through text-[#98a2b3]">
          {formatPrice(dataItem.price)}
        </span>
        <Flex gap="small" className="select-none cursor-none">
          <Rate value={dataItem.rating} disabled />
          <span>{dataItem.rating}</span>
        </Flex>
      </div>
    </Card>
  );
};

export default CardItem;
