import "./styles.scss";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

import photoBooth1 from "public/carousel/pexels-ana-arantes-2966345.jpg";
import photoBooth2 from "public/carousel/pexels-lisa-fotios-1252983.jpg";
import photoBooth3 from "public/carousel/pexels-lisa-fotios-5653734-2.jpg";
import photoBooth4 from "public/carousel/pexels-michael-morse-2606402.jpg";

export const images = [photoBooth2.src, photoBooth3.src, photoBooth4.src];

function ProductImage({ id, onExpand }) {
  const { width, height } = useWindowSize();

  //   let imageSize = 200;

  //   if (width > 1400) return (imageSize = 200);
  //   if (width > 1400) return (imageSize = 200);
  //   if (width > 1400) return (imageSize = 200);

  //   console.log(width, height);

  return (
    <motion.img
      src={id}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
      width={200}
      height={200}
    />
  );
}

export const Gallery = () => {
  const [productIds, setProductIds] = useState(images);
  const [primaryProduct, setPrimaryProduct] = useState(photoBooth1.src);

  function setAsPrimary(id) {
    console.log(id);
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <div className="container">
      <LayoutGroup type="crossfade">
        <main className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryProduct}
              className="primary-product-image"
              src={primaryProduct}
              alt=""
              layoutId={`product-${primaryProduct}`}
              width={1280}
              height={620}
            />
          </AnimatePresence>
        </main>
        <aside className="product-gallery">
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </LayoutGroup>
    </div>
  );
};
