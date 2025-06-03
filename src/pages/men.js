import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import ProductCard from "@/components/Products/ProductCard";
import Pagination from "@/components/Products/Pagination";

const ProductListMen = ({ productsMen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsMen.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(productsMen.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  const formatPrice = (price) =>
    price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  return (
    <>
      <SEO
        title="Danh sách sản phẩm Nam"
        description="Khám phá các sản phẩm dành cho nam tại cửa hàng của chúng tôi. Chọn lựa những sản phẩm yêu thích với giá cả hợp lý."
        image="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/logoMeta.png"
        url="https://NhuHauShop.com"
      />

      <main className="max-w-[1100px] mx-auto px-4">
        <header>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Danh sách sản phẩm Nam
          </h1>
        </header>

        <section
          aria-label="Danh sách sản phẩm"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[800px]"
        >
          {currentProducts.map((product) => {
            return (
              <ProductCard
              key={product.id}
              product={product}
              formatPrice={formatPrice}
            />
            )
          })}
        </section>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      </main>
    </>
  );
};

// Fetch products server-side (SSR) for SEO
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products?limit=1000&skip=0");
  const data = await res.json();

  return {
    props: {
      productsMen: data.products,
    },
  };
}

export default ProductListMen;
