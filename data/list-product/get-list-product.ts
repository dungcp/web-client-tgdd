"use server";

export async function getListProduct() {
  return {
    data: [
      {
        id: 1,
        src: "https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-bac-thumb-600x600.jpg",
        name: "iPhone 14 Pro Max",
        technique: "A16 Bionic chip, 48MP Camera",
        size: "6.7 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "1,199.00",
        discountedPrice: "1,099.00",
        rating: 4.8,
        resolution: "Full HD+",
      },
      {
        id: 2,
        src: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-green-thumbnew-600x600.jpg",
        name: "Samsung Galaxy S23 Ultra",
        technique: "Snapdragon 8 Gen 2, 200MP Camera",
        size: "6.8 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "1,199.00",
        discountedPrice: "1,049.00",
        rating: 4.7,
        resolution: "Full HD+",
      },
      {
        id: 3,
        src: "https://cdn.tgdd.vn/Products/Images/42/282398/google-pixel-7-600x600.jpg",
        name: "Google Pixel 7",
        technique: "Tensor G2, 50MP Camera",
        size: "6.3 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "699.00",
        discountedPrice: "649.00",
        rating: 4.6,
        resolution: "Full HD+",
      },
      {
        id: 4,
        src: "https://cdn.tgdd.vn/Products/Images/42/299729/oneplus-11-600x600.jpg",
        name: "OnePlus 11",
        technique: "Snapdragon 8 Gen 2, 100W Fast Charging",
        size: "6.7 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "899.00",
        discountedPrice: "799.00",
        rating: 4.5,
        resolution: "Full HD+",
      },
      {
        id: 5,
        src: "https://cdn.tgdd.vn/Products/Images/42/242454/sony-xperia-1-iv-1-600x600.jpg",
        name: "Sony Xperia 1 IV",
        technique: "4K Display, Snapdragon 8 Gen 1",
        size: "6.5 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "1,299.00",
        discountedPrice: "1,199.00",
        rating: 4.7,
        resolution: "Full HD+",
      },
      {
        id: 6,
        src: "https://cdn.tgdd.vn/Products/Images/42/329938/xiaomi-14t-grey-thumb-600x600.jpg",
        name: "Xiaomi Mi 12",
        technique: "Snapdragon 8 Gen 1, 108MP Camera",
        size: "6.28 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "749.00",
        discountedPrice: "699.00",
        rating: 4.4,
        resolution: "Full HD+",
      },
      {
        id: 7,
        src: "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg",
        name: "Oppo Find X5 Pro",
        technique: "Snapdragon 8 Gen 1, 80W Fast Charging",
        size: "6.7 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "1,049.00",
        discountedPrice: "999.00",
        rating: 4.6,
        resolution: "Full HD+",
      },
      {
        id: 8,
        src: "https://cdn.tgdd.vn/Products/Images/42/234374/Huawei-p50-Pro-Plus-600x600.jpg",
        name: "Huawei P50 Pro",
        technique: "Kirin 9000, 50MP Dual Matrix Camera",
        size: "6.6 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "899.00",
        discountedPrice: "849.00",
        rating: 4.5,
        resolution: "Full HD+",
      },
      {
        id: 9,
        src: "https://cdn.tgdd.vn/Products/Images/42/292006/vivo-x90-pro-plus-1-600x600.jpg",
        name: "Vivo X90 Pro",
        technique: "Dimensity 9200, 120W Fast Charging",
        size: "6.78 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "1,199.00",
        discountedPrice: "1,099.00",
        rating: 4.7,
        resolution: "Full HD+",
      },
      {
        id: 10,
        src: "https://cdn.tgdd.vn/Products/Images/42/319584/samsung-galaxy-a15-5g-xanh-duong-nhat-thumb-600x600.jpg",
        name: "Samsung Galaxy A15 5G 8GB/256GB",
        technique: "Snapdragon 8+ Gen 1, 200MP Camera",
        size: "6.67 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "999.00",
        discountedPrice: "949.00",
        rating: 4.6,
        resolution: "Full HD+",
      },
      {
        id: 11,
        src: "https://cdn.tgdd.vn/Products/Images/42/325800/redmi-13-blue-thumb-600x600.jpg",
        name: "Xiaomi Redmi 13 6GB/128GB",
        technique: "Snapdragon 8+ Gen 1, 165Hz Display",
        size: "6.78 inches",
        category: "smartphone",
        isOnlineOnly: false,
        price: "1,099.00",
        discountedPrice: "1,049.00",
        rating: 4.8,
        resolution: "Full HD+",
      },
      {
        id: 12,
        src: "https://cdn.tgdd.vn/Products/Images/42/328452/oppo-a3x-blue-thumb-600x600.jpg",
        name: "OPPO A3x 6GB/128GB",
        technique: "Dimensity 8100, 150W Fast Charging",
        size: "6.7 inches",
        category: "smartphone",
        isOnlineOnly: true,
        price: "699.00",
        discountedPrice: "649.00",
        rating: 4.4,
        resolution: "Full HD+",
      },
    ],
  };
}
