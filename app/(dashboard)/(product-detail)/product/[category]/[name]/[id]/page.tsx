import ProductDetail from "@/components/ui/product-detail/ProductDetail";

interface GetParams {
  params: {
    category: string;
    name: string;
  };
}

export default async function PageDetail({ params }: GetParams) {
  console.log("params", params);
  return <ProductDetail />;
}
