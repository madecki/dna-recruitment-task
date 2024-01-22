import { ProductProps } from "@/pages/api/featured-products";
import styles from "./ProductPreview.module.css";
import Link from "next/link";

type Props = Pick<
  ProductProps,
  "title" | "currency" | "isNew" | "imageSrc" | "slug" | "price"
>;

export default function ProductPreview({
  title,
  currency,
  price,
  isNew,
  imageSrc,
  slug,
}: Props) {
  return (
    <Link href={`product/${slug}`}>
      <article
        className={styles.product}
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        <header className={styles.productHeader}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <strong className={styles.price}>
              {currency}
              {price}
            </strong>
          </div>

          {isNew && <div className={styles.newIndicator}>New</div>}
        </header>
      </article>
    </Link>
  );
}
