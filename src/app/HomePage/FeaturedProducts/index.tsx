"use client";

import ProductPreview from "@/app/components/ProductPreview";
import { ProductProps } from "@/pages/api/featured-products";
import styles from "./FeaturedProducts.module.css";
import { useEffect, useState } from 'react';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      const response = await fetch("http://localhost:3000/api/featured-products");
      setProducts(await response.json());
    };

    getProducts();
  }, []);

  return (
    <div className="container">
      <h1 className={styles.heading}>Top Selling</h1>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <ProductPreview
            title={product.title}
            price={product.price}
            currency={product.currency}
            imageSrc={product.imageSrc}
            slug={product.slug}
            isNew={product.isNew}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
