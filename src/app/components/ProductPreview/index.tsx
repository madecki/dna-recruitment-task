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
      <div
        className={styles.product}
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        <div className={styles.productHeader}>
          <div>
            <div>
              <span className={styles.title}>{title}</span>
            </div>
            <span className={styles.price}>
              {currency}
              {price}
            </span>
          </div>

          {isNew && <div className={styles.newIndicator}>New</div>}
        </div>
      </div>
    </Link>
  );
}
