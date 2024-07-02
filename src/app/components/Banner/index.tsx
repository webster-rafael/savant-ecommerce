"use client";
import Image from "next/image";
import ButtonSlide from "./button";
import { useEffect, useState } from "react";

interface SlideItem {
  id: number;
  url: string;
  title: string;
  color: string;
}

const slide: SlideItem[] = [
  {
    id: 1,
    url: "/mizuno-prophecy-13.png",
    title: "20%",
    color: "bg-slate-200",
  },
  {
    id: 2,
    url: "/adidas-yeezy.png",
    title: "10%",
    color: "bg-green-100",
  },
  {
    id: 3,
    url: "/nike-airforce.png",
    title: "15%",
    color: "bg-slate-700",
  },
];

const Banner = () => {
  const [currentSlides, setCurrentSlides] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Função para avançar o slide automaticamente a cada 4 segundos
    const interval = setInterval(() => {
      setCurrentSlides((prevSlide) => (prevSlide + 1) % slide.length);
    }, 4000);
    setAutoSlideInterval(interval);

    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, []);

  const handleClick = (index: number) => {
    setCurrentSlides(index);
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  };

  return (
    <section
      className={`w-full flex max-w-[90%] h-[220px] rounded-lg ${slide[currentSlides].color} py-5 relative transition-all duration-700 ease-in-out`}
    >
      <div className="w-[80%] h-full flex flex-col justify-start pt-5 px-5 font-poppins">
        <h1
          className={`text-2xl font-semibold ${
            currentSlides === 2 ? "text-zinc-50" : "text-zinc-700"
          }`}
        >
          <span className="text-4xl text-blue-600">
            {slide[currentSlides].title}
          </span>{" "}
          de desconto
        </h1>
        <p
          className={`font-[500] text ${
            currentSlides === 2 ? "text-zinc-50" : "text-zinc-700"
          }`}
        >
          na sua 1° compra
        </p>
        <button className="w-32 bg-zinc-950 text-zinc-50 flex justify-center items-center rounded-2xl h-12 text-sm hover:scale-110 duration-300 mt-10">
          Compre Já
        </button>
      </div>
      <div className="absolute -bottom-5 -right-5 transition-all duration-500">
        <Image
          src={slide[currentSlides].url}
          className="bg-transparent -rotate-[30deg] w-[250px] h-[250px]"
          width={250}
          height={250}
          quality={100}
          priority
          alt="Banner de um tenis da Mizuno"
        />
      </div>

      <div className="w-full absolute -bottom-10 flex justify-center items-center gap-2">
        {slide.map((item, index) => (
          <ButtonSlide
            key={item.id}
            onclick={() => handleClick(index)}
            active={index === currentSlides}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
