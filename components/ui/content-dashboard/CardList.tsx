"use client";

import CardItem, { DataCardItem } from "./CardItem";
import { Col, Row } from "antd";
export type CardListProps = {
  dataCardList: DataCardItem[];
};

const CardList: React.FC<CardListProps> = ({ dataCardList }) => {
  return (
    <div className="px-4 py-8">
      <Row gutter={[16, 16]}>
        {dataCardList.map((item, index) => (
          <Col span={4} key={index}>
            <CardItem dataItem={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default CardList;
