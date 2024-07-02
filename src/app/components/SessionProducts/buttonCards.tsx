"use client";

import useStore from "@/app/Context/Providers/useStore";
import { useEffect, useState } from "react";


const ButtonCards = () => {
  const { products, setActiveBrand, activeBrand, applyBrandFilter } = useStore();

  const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);

  useEffect(() => {
    const uniqueBrandsArray = products
      .map((produto) => produto.marca)
      .filter((marca, id, self) => self.indexOf(marca) === id);

    setUniqueBrands(uniqueBrandsArray);
  }, [products]);

  const handleBrandClick = (marca: string) => {
    setActiveBrand(marca === activeBrand ? null : marca);
    applyBrandFilter();
  };

  return (
    <>
      {uniqueBrands.map((marca) => (
        <button
          onClick={() => handleBrandClick(marca)}
          key={marca}
          className={`text-zinc-400 w-full text-xs py-1 border flex items-center px-6 rounded-3xl font-semibold ${
            marca === activeBrand ? 'bg-black text-white' : 'active:bg-black'
          }`}
        >
          {marca.toLocaleUpperCase()}
        </button>
      ))}
    </>
  );
};

export default ButtonCards;
