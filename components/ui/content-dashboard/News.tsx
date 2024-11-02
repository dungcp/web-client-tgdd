"use client";
import { ListNewsImage, ListNewsQuestions } from "@/app/constants/listImage";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Item = ({ listItem }: any) => {
  return (
    <div className="flex gap-4">
      {listItem.map((item: any) => (
        <Link href="#" className="max-w-[282px]">
          <Image
            className="rounded-lg"
            src={item.src}
            alt={item.alt}
            width={280}
            height={162}
          />
          <p className="pt-[10px]">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

const News = () => {
  const [displayNews, setDisplayNews] = useState<string>("technology");

  const handleChange = (key: string) => {
    setDisplayNews(key);
  };

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <h1 className="text-xl font-bold">Bài tin</h1>
      <Flex gap="small">
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChange("technology")}
          className={`${
            displayNews === "technology"
              ? "border-black border-2 text-black font-semibold"
              : ""
          }`}
        >
          24h công nghệ
        </Button>
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChange("question")}
          className={`${
            displayNews === "question"
              ? "border-black border-2 text-black font-semibold"
              : ""
          }`}
        >
          Hỏi đáp
        </Button>
      </Flex>
      {displayNews === "technology" ? (
        <Item listItem={ListNewsImage} />
      ) : (
        <Item listItem={ListNewsQuestions} />
      )}
      <div className="flex justify-center gap-1 text-blue-500 font-semibold">
        <Link href="#" className="">
          Xem thêm bài tin
        </Link>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
export default News;
