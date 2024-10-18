"use client";

import { Card, CreateModal } from "@/components/ui";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="flex justify-end p-6">
          <CreateModal />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products?.map((product) => {
            return <Card key={product?.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
