import Image from "next/image";
import { fetchProductsByCategory } from "@/lib/api/Products";
import ProductList from "@/components/HomeBody/ProductList";
import SEO from "@/components/SEO";

export default function HomePage({
  productsMen,
  productsWomen,
  productsUnisex,
  productsAccessories,
  productsBag,
  productsSandals,
}) {
  return (
    <>
      <SEO
        title="NuHauShop - Cửa Hàng Thời Trang"
        description="Khám phá các sản phẩm thời trang mới nhất tại NhuHauShop."
        image="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/logoMeta.png"
        url="https://NhuHauShop.com"
      />
      <main className="overflow-hidden">
        <div className="max-w-full mx-auto">
          <video
            src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/videobg.mp4"
            autoPlay
            muted
            loop
            width="100%"
          >
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="flex">
            <div className="w-full">
            <Image
              src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/imageHomePage1.avif"
              alt="Background image 1"
              width={1200}
              height={800}
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/imageHomePage2.avif"
              alt="Background image 2"
              width={1200}
              height={800}
              className="object-cover"
              priority
            />
          </div>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto">
          <ProductList
            productsMen={productsMen}
            productsWomen={productsWomen}
            productsUnisex={productsUnisex}
            productsAccessories={productsAccessories}
            productsBag={productsBag}
            productsSandals={productsSandals}
          />
        </div>
      </main>
    </>
  );
}

// ✅ SSR - Trang sẽ được tạo HTML sẵn mỗi lần user truy cập
export async function getServerSideProps() {
  const [
    productsMen,
    productsWomen,
    productsUnisex,
    productsAccessories,
    productsBag,
    productsSandals,
  ] = await Promise.all([
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("smartphones"),
    fetchProductsByCategory("smartphones"),
  ]);

  return {
    props: {
      productsMen: productsMen.slice(0, 6),
      productsWomen: productsWomen.slice(0, 6),
      productsUnisex: productsUnisex.slice(0, 6),
      productsAccessories: productsAccessories.slice(0, 6),
      productsBag: productsBag.slice(0, 6),
      productsSandals: productsSandals.slice(0, 6),
    },
  };
}
