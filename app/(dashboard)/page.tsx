import CustomCarousel from "@/components/ui/content-dashboard/Carousel";
import News from "@/components/ui/content-dashboard/News";
import PeopleAlsoSearch from "@/components/ui/content-dashboard/PeopleAlsoSearch";
import SpecialOffer from "@/components/ui/content-dashboard/SpecialOffer";
import Suggesstions from "@/components/ui/content-dashboard/Suggesstions";
import TabsPromotion from "@/components/ui/content-dashboard/TabsPromotion";
import { getListProduct } from "@/data/list-product/get-list-product";

async function getListProductMobile() {
  const { data } = await getListProduct();
  return data;
}

export default async function Home() {
  const data = await getListProductMobile();

  return (
    <div className="pt-28 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Khuyến mãi Online</h1>
      <div className="bg-white rounded-lg">
        <TabsPromotion dataListProduct={data} />
      </div>
      <CustomCarousel />
      <Suggesstions dataListSuggesstions={data} />
      <SpecialOffer />
      <News />
      <PeopleAlsoSearch />
    </div>
  );
}
