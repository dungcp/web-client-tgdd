"use client";

import { ArrowDownOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import {
  LogosCertify,
  aboutCompony,
  logos,
  otherInformations,
  supportInfo,
} from "@/app/constants/footer";
const Footer = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const socials = [
    {
      label: "3886.8k Fan",
      icon: <FaFacebook className="h-[18px] w-[18px]" />,
      href: "https://www.facebook.com/thegioididongcom",
    },
    {
      label: "869k Đăng ký",
      icon: <FaYoutube className="h-[18px] w-[18px" />,
      href: "https://www.youtube.com/user/TGDDVideoReviews",
    },
    {
      label: "Zalo TGDĐ",
      icon: <SiZalo className="h-[18px] w-[18px]" />,
      href: "https://zalo.me/936590283559458736",
    },
  ];
  const otherDisplay = useMemo(() => {
    if (!showMore) {
      return otherInformations.slice(0, 5);
    } else {
      return otherInformations;
    }
  }, [showMore]);
  return (
    <footer className="border-t-[1px] border-solid border-[#e2e2e2] bg-white relative">
      <section className="max-w-[1200px] w-[100%] m-auto pt-4 pb-[5px] flex">
        <div className="w-[24%]">
          <p className="text-[#1d2939]">
            <strong>Tổng đài hỗ trợ</strong>
          </p>
          {supportInfo.map((info) => (
            <p key={info.phone} className="mt-[10px] leading-5">
              <span>{info.label}:</span>
              <Link
                href={`tel:${info.phone}`}
                className="text-[#2f80ed] font-bold"
              >
                {info.phone}
              </Link>{" "}
              ({info.hours})
            </p>
          ))}
        </div>
        <div className="w-[19%]">
          <p className="text-[#1d2939]">
            <strong>Về công ty</strong>
          </p>
          <div className="flex flex-col gap-2 mt-1">
            {aboutCompony.map((item) => (
              <Link className="hover:text-blue-400" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[28%]">
          <p className="text-[#1d2939]">
            <strong>Thông tin khác</strong>
          </p>
          <div className="flex flex-col gap-2 mt-1">
            {otherDisplay.map((item) => (
              <Link className="hover:text-blue-400" href={item.href}>
                {item.label}
              </Link>
            ))}
            {!showMore ? (
              <div className="flex gap-[2px] hover:text-blue-400">
                <Button type="link" onClick={() => setShowMore(true)}>
                  Xem thêm
                </Button>
                <DownOutlined />
              </div>
            ) : (
              <div className="flex gap-[2px] hover:text-blue-400">
                <Button type="link" onClick={() => setShowMore(false)}>
                  Thu gọn
                </Button>
                <UpOutlined />
              </div>
            )}
          </div>
        </div>
        <div className="w-[29%]">
          <div className="overflow-hidden mb-4 flex flex-col gap-2">
            <p className="text-[#222] text-sm">Website cùng tập đoàn</p>
            <div className="flex flex-wrap gap-2">
              {logos.map((logo) => (
                <Link
                  href={logo.href}
                  key={logo.name}
                  className={`${styles.iconLogo} ${logo.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{logo.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              {socials.map((social) => (
                <Link
                  href={social.href}
                  key={social.label}
                  className="flex gap-2 items-center"
                >
                  {social.icon}
                  <span className="text-[#2f80ed]">{social.label}</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {LogosCertify.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.iconCertify} ${item.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                ></Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#f1f1f1] py-4">
        <section className="max-w-[1200px] w-[100%] m-auto">
          <p className="text-[12px] text-[#666]">
            {" "}
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông
            Tin và Truyền Thông cấp ngày 04/06/2020.
            <br />
            Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa
            chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú,
            TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email:
            cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt.
            Email: hotrotmdt@thegioididong.com.
            <Link
              className="text-[#2f80ed]"
              href="https://www.thegioididong.com/thoa-thuan-su-dung-trang-mxh"
            >
              Xem chính sách sử dụng
            </Link>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
