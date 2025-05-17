import { useState, useEffect } from "react";
import type { Product } from "../types/types";
import {Loader} from "./UI/loader";
import { useFilter } from "./contex/shopContext";

type ShopPageProps = {
  addToCart: (product: Product) => void;
};

export default function ShopPage({ addToCart }: ShopPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {query} = useFilter();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const prodFilter = products.filter((prod) =>
    prod.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Fckin Ass</h1>
      <div className="py-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-80">
            {prodFilter.map((product) => (
              <div key={product.id} className="p-4 border rounded shadow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 mx-auto object-contain"
                />
                <h3 className="font-semibold mt-2">{product.title}</h3>
                <p className="text-green-600">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Add to cart
                </button>
              </div>
            ))}
            {prodFilter.length === 0 && (
              <p className="text-center col-span-full">No products found 😢</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
