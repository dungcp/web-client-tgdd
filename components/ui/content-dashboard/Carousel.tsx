"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imagesData } from "@/app/constants/carousels";
import styles from "./Carousel.module.css";
const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalSlides = imagesData.length;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const currentItems = imagesData[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prev}`}
        onClick={handlePrev}
      >
        ❮
      </button>
      <div className={styles.carouselSlideWrapper}>
        <div className={styles.carouselSlide}>
          {currentItems.map((image) => (
            <div key={image.src} className={styles.carouselItem}>
              <Image
                className="rounded-lg"
                src={image.src}
                width={672}
                height={224}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.carouselButton} ${styles.next}`}
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default CustomCarousel;
