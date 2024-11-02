"use client";
import { DataCardItem } from "./CardItem";
import CardList from "./CardList";
type SuggesstionsProps = {
  dataListSuggesstions: DataCardItem[];
};

const Suggesstions: React.FC<SuggesstionsProps> = ({
  dataListSuggesstions,
}) => {
  return (
    <div className="bg-white rounded-lg mb-3">
      <h1 className="text-xl font-bold p-3">Gợi ý cho bạn</h1>
      <CardList dataCardList={dataListSuggesstions} />
    </div>
  );
};
export default Suggesstions;
