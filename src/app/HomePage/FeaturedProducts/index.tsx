import ProductPreview from "@/app/components/ProductPreview";
import { ProductProps } from "@/pages/api/featured-products";
import styles from "./FeaturedProducts.module.css";

export default async function FeaturedProducts() {
  const response = await fetch("http://localhost:3000/api/featured-products");
  const products = (await response.json()) as ProductProps[];

  return (
    <div className="container">
      <h1 className={styles.heading}>Top Selling</h1>
      <section className={styles.gridContainer}>
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
      </section>
    </div>
  );
}
