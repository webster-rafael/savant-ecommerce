"use client";
import { useEffect, useRef, useState } from "react";
import ButtonCards from "./buttonCards";
import Cards from "../Cards";
import useStore from "@/app/Context/Providers/useStore";

export default function SessionProducts() {
  const { fetchProducts, filteredProducts, activeBrand, setActiveBrand } = useStore();
  const itemsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -(itemsRef.current?.offsetLeft ?? 0));
    setScrollLeft(itemsRef.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !itemsRef.current) return;
    e.preventDefault();
    const x = e.pageX - (itemsRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 1;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    // Definir a marca "adidas" como ativa ao carregar a página
    setActiveBrand("adidas");
  }, [setActiveBrand]);

  return (
    <div className="w-full h-full max-w-[90%] py-2 mx-auto">
      <div
        className="w-full flex gap-3 py-5 overflow-x-auto select-none hide-scroll-bar"
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <ButtonCards />
      </div>
      <div className="w-full grid grid-cols-2 gap-6 font-worksans">
        <Cards products={filteredProducts} />
      </div>
    </div>
  );
}
