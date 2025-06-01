import HomeSlide from "@/components/Products/HomeBody/HomeSlide";
import Image from "next/image";
import { fetchProductsByCategory } from "@/lib/api/Products";
import ProductList from "@/components/Products/HomeBody/ProductList";

export default function HomePage({
  productsMen,
  productsWomen,
  productsUnisex,
  productsBag,
  productsSandals,
}) {
  return (
    <main className="overflow-hidden">
      <div className="max-w-full mx-auto">
        <HomeSlide />
        <Image
          src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/background.png"
          alt="Background image"
          width={1200}
          height={800}
          className="w-full object-cover"
          priority
        />
      </div>
      <div className="max-w-[400px] sm:max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
        <ProductList
          productsMen={productsMen}
          productsWomen={productsWomen}
          productsUnisex={productsUnisex}
          productsBag={productsBag}
          productsSandals={productsSandals}
        />
      </div>
    </main>
  );
}

// ✅ SSR - Trang sẽ được tạo HTML sẵn mỗi lần user truy cập
export async function getServerSideProps() {
  const [
    productsMen,
    productsWomen,
    productsUnisex,
    productsBag,
    productsSandals,
  ] = await Promise.all([
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("laptops"),
    fetchProductsByCategory("beauty"),
    fetchProductsByCategory("fragrances"),
    fetchProductsByCategory("mens-shoes"),
  ]);

  return {
    props: {
      productsMen: productsMen.slice(0, 5),
      productsWomen: productsWomen.slice(0, 5),
      productsUnisex: productsUnisex.slice(0, 5),
      productsBag: productsBag.slice(0, 5),
      productsSandals: productsSandals.slice(0, 5),
    },
  };
}
