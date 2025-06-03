import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductCard from "../Products/ProductCard";
import Image from "next/image";

export default function ProductList({
  productsMen,
  productsWomen,
  productsUnisex,
  productsAccessories,
  productsBag,
  productsSandals,
}) {
  const router = useRouter();

  const handleNavigate = (categoryURL) => {
    router.push(`/${categoryURL}`);
  };

  const formatPrice = (price) =>
    price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  const categoryImages = {
    men: "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/menhome.png",
    women:
      "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/womenhome.png",
    unisex:
      "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/unisexhome.png",
    accessories:
      "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/accessorieshome.jpg",
    bag: "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/baghome.jpg",
    sandals:
      "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/shoeshome.png",
  };

  const [screenWidth, setScreenWidth] = useState(null);

  const getDisplayedProductsCount = (screenWidth) => {
    if (screenWidth >= 1024) return 5;
    if (screenWidth >= 640) return 6;
    return 4;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (screenWidth === null) {
    return null;
  }

  const renderProducts = (categoryName, categoryURL, products) => {
    const displayedCount = getDisplayedProductsCount(screenWidth);

    return (
      <section className="my-36">
        <div className="flex justify-between text-sm mb-4">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase">
            {categoryName}
          </h1>
          <a
            href={`${categoryURL}`}
            className="text-black hover:underline transition duration-200"
          >
            XEM TẤT CẢ
          </a>
        </div>
        <div>
          <Image
            src={categoryImages[categoryURL]}
            alt="Background image"
            width={1200}
            height={800}
            className="w-full object-cover pb-10"
            priority
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
          {products.slice(0, displayedCount).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                formatPrice={formatPrice}
              />
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <main>
      {renderProducts("THỜI TRANG NAM", "men", productsMen)}
      {renderProducts("THỜI TRANG NỮ", "women", productsWomen)}
      {renderProducts("PHONG CÁCH UNISEX", "unisex", productsUnisex)}
      {renderProducts("NÓN VÀ PHỤ KIỆN", "accessories", productsAccessories)}
      {renderProducts("TÚI VÀ BALO SÀNH ĐIỆU", "bag", productsBag)}
      {renderProducts("GIÀY THỜI THƯỢNG", "sandals", productsSandals)}
    </main>
  );
}
