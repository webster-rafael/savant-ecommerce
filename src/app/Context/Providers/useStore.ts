import { create } from "zustand";

interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  cor2?: string; // Cor opcional
  cor3?: string; // Cor opcional
  description: string;
  featured: boolean;
  marca: string;
}


interface State {
  products: Product[];
  activeBrand: string | null;
  fetchProducts: () => Promise<void>;
  setActiveBrand: (marca: string | null) => void;
  filteredProducts: Product[];
  applyBrandFilter: () => void;
}

const useStore = create<State>((set) => ({
  products: [],
  activeBrand: null,
  fetchProducts: async () => {
    try {
      const response = await fetch("http://localhost:3042/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos.");
      }
      const data: Product[] = await response.json();
      set({ products: data });

      // Aplicar filtro inicial para a marca ativa
      set((state) => ({
        ...state,
        filteredProducts: data.filter(
          (product: Product) => product.marca === state.activeBrand
        ),
      }));
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  },
  setActiveBrand: (marca) => set({ activeBrand: marca }),
  filteredProducts: [],
  applyBrandFilter: () => {
    set((state) => ({
      ...state,
      filteredProducts: state.products.filter(
        (product) => product.marca === state.activeBrand
      ),
    }));
  },
}));

export default useStore;
