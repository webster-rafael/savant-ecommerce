import useStore from "@/app/Context/Providers/useStore";
import Image from "next/image";
import { useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="w-full bg-slate-200 rounded-lg h-[250px] px-3"
        >
          <Image
            className="-rotate-[30deg] mix-blend-multiply contrast-100"
            src={item.image}
            width={200}
            height={200}
            quality={100}
            alt="Tenis"
          />
          <h3 className="text-xs font-medium">{item.title}</h3>
          <div className="flex justify-between items-center">
            <p className="font-medium text-zinc-600">
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button className="border border-zinc-400 p-2 rounded-lg">
              <IoArrowForward />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
