import {
  CustomerServiceOutlined,
  LaptopOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { FiWatch } from "react-icons/fi";
import { IoWatchSharp } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import { PiWashingMachineBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
export type ProductHeaderItem = {
  label: string;
  icon: React.ReactElement;
  subIcon?: React.ReactElement;
};

export type ListFeatureItem = ProductHeaderItem;

export const ListProductHeader: ProductHeaderItem[] = [
  {
    label: "Điện thoại",
    icon: <MobileOutlined />,
  },
  {
    label: "Laptop",
    icon: <LaptopOutlined />,
  },
  {
    label: "Phụ kiện",
    icon: <CustomerServiceOutlined />,
  },
  {
    label: "Smartwatch",
    icon: <IoWatchSharp />,
  },
  {
    label: "Đồng Hồ",
    icon: <FiWatch />,
  },
  {
    label: "Tablet",
    icon: <FaTabletAlt />,
  },
  {
    label: "Máy cũ, Thu cũ",
    icon: <PiWashingMachineBold />,
    subIcon: <IoIosArrowDown />,
  },
  {
    label: "PC, Máy in",
    icon: <FaLaptopCode />,
    subIcon: <IoIosArrowDown />,
  },
  {
    label: "Sim, Thẻ cào",
    icon: <FaSimCard />,
  },
  {
    label: "Dịch vụ Tiện ích",
    icon: <MdMedicalServices />,
    subIcon: <IoIosArrowDown />,
  },
];

export const ListFeatures: ListFeatureItem[] = [
  {
    label: "Đăng nhập",
    icon: <GoPerson />,
  },
  {
    label: "Giỏ hàng",
    icon: <MdOutlineShoppingCart />,
  },
];

const dataDetail = {
  id: "p123456",
  name: "Product Name",
  category: "laptop", // Các giá trị có thể là "smartphone", "laptop", "watch"
  highlightImages: [
    {
      src: "https://example.com/images/product-front.jpg",
      alt: "Front View",
    },
    {
      src: "https://example.com/images/product-back.jpg",
      alt: "Back View",
    },
  ],
  angleImages: [
    {
      src: "https://example.com/images/product-side.jpg",
      alt: "Side View",
    },
  ],
  price: {
    original: "1200.00",
    discounted: "1000.00",
    currency: "USD",
  },
  promotions: ["Free Shipping", "1-Year Extended Warranty"],
  accessories: ["Charger", "USB Cable", "User Manual"],
  colorOptions: ["Silver", "Black", "Gold"],
  technicalSpecifications: {
    images: [
      {
        src: "https://example.com/images/product-tech.jpg",
        alt: "Product Technical Specifications",
      },
    ],
    smartphone: {
      configurationAndMemory: {
        chipset: "A16 Bionic",
        cpu: "6-core CPU",
        gpu: "5-core GPU",
        ram: "6GB",
        storage: "128GB, 256GB, 512GB, 1TB",
      },
      cameraAndDisplay: {
        mainCamera: "48MP + 12MP + 12MP",
        frontCamera: "12MP",
        display: {
          type: "Super Retina XDR OLED",
          size: "6.7 inches",
          resolution: "2796 x 1290 pixels",
        },
      },
      batteryAndCharging: {
        capacity: "4323 mAh",
        fastCharging: "20W",
        wirelessCharging: "15W",
      },
      utilities: ["Face ID", "Water resistant (IP68)", "Emergency SOS"],
      connectivity: {
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.3",
        gps: true,
        nfc: true,
        sim: "Dual SIM (nano-SIM and eSIM)",
      },
      designAndMaterial: {
        dimensions: "160.7 x 77.6 x 7.85 mm",
        weight: "240 g",
        material: "Ceramic Shield, Glass back",
        frame: "Stainless steel",
      },
    },
    laptop: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: {
        size: "15.6 inches",
        resolution: "1920 x 1080 pixels",
        type: "IPS LCD",
      },
      graphicsAndAudio: {
        gpu: "NVIDIA GeForce RTX 3060",
        audio: "Dolby Atmos",
      },
      portsAndExtensions: ["USB-C", "HDMI", "3.5mm Audio Jack"],
      dimensionsAndWeight: {
        dimensions: "357 x 235 x 18 mm",
        weight: "2.3 kg",
      },
      additionalInfo: ["Backlit Keyboard", "Fingerprint Sensor", "HD Webcam"],
    },
    watch: {
      display: {
        type: "AMOLED",
        size: "1.4 inches",
        resolution: "400 x 400 pixels",
      },
      design: {
        material: "Stainless Steel",
        waterResistance: "50m",
      },
      utilities: [
        "Heart Rate Monitor",
        "Sleep Tracking",
        "GPS",
        "Notifications",
      ],
      battery: {
        type: "Lithium Ion",
        capacity: "300 mAh",
        chargingTime: "1.5 hours",
      },
      configurationAndConnectivity: {
        chipset: "Snapdragon Wear 4100",
        ram: "1GB",
        storage: "8GB",
        bluetooth: "Bluetooth 5.0",
        wifi: "Yes",
        nfc: true,
      },
      additionalInfo: [
        "Customizable Watch Faces",
        "Compatible with Android & iOS",
      ],
    },
  },
  rating: 4.5,
  reviews: [
    {
      user: "JohnDoe",
      rating: 5,
      title: "Fantastic Product!",
      content:
        "Highly recommend for anyone looking for performance and quality.",
    },
  ],
};
