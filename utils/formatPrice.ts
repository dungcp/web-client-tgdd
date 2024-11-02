export function formatPrice(priceStr: string) {
  const priceNumber = parseFloat(priceStr.replace(/,/g, ""));
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(priceNumber);
  return formattedPrice;
}
