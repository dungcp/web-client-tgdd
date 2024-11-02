"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Image from "next/image";
import FlashSale from "@/app/image/flash sale.png";
import Privilege from "@/app/image/dac quyen.png";
import OnlineOnly from "@/app/image/online only.png";
import { DataCardItem } from "./CardItem";
import CardList from "./CardList";

type TabsPromotionProps = {
  dataListProduct: DataCardItem[];
};
const TabsPromotion: React.FC<TabsPromotionProps> = ({ dataListProduct }) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <Image src={FlashSale} alt="flash sale" width={141} height={44} />,
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: <Image src={Privilege} alt="dac quyen" width={141} height={44} />,
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: (
        <Image src={OnlineOnly} alt="online only" width={141} height={44} />
      ),
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: <div className="w-[141px]">Điện Thoại</div>,
      children: <CardList dataCardList={dataListProduct} />,
    },
    {
      key: "5",
      label: <div className="w-[141px]">Apple</div>,
      children: "Content of Tab Pane 5",
    },
    {
      key: "6",
      label: <div className="w-[141px]">Laptop</div>,
      children: "Content of Tab Pane 6",
    },
    {
      key: "7",
      label: <div className="w-[141px]">Phụ Kiện</div>,
      children: "Content of Tab Pane 7",
    },
    {
      key: "8",
      label: <div className="w-[141px]">Đồng Hồ</div>,
      children: "Content of Tab Pane 8",
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
export default TabsPromotion;
