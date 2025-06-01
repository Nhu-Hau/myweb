import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductList({
  productsMen,
  productsWomen,
  productsUnisex,
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

  const renderProducts = (categoryName, categoryURL, products) => (
    <section className="my-8">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 uppercase">
        {categoryName}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product, index) => {
          const isOnSale = product.discountPercentage > 0;
          const salePrice =
            product.price * (1 - product.discountPercentage / 100);

          return (
            <article
              key={product.id}
              className={`group border p-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
                index === 4 ? "hidden lg:block" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg aspect-[4/3] relative">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-contain transition group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold mt-2 line-clamp-2">
                {product.title}
              </h3>
              <div>
                {isOnSale ? (
                  <>
                    <p className="text-gray-500 line-through text-xs md:text-sm">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-red-500 font-semibold flex gap-2 text-xs sm:text-sm">
                      {formatPrice(Math.round(salePrice))}
                      <span className="text-[9px] md:text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="text-gray-700 font-medium text-xs md:text-sm">
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 md:px-5 md:py-2 text-[9px] sm:text-[11px] lg:text-xs bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition"
          onClick={() => handleNavigate(categoryURL)}
        >
          XEM TẤT CẢ CÁC SẢN PHẨM VỀ <b>{categoryName}</b>
        </button>
      </div>
    </section>
  );

  return (
    <main>
      {renderProducts("NAM", "men", productsMen)}
      {renderProducts("NỮ", "women", productsWomen)}
      {renderProducts("UNISEX", "unisex", productsUnisex)}
      {renderProducts("NÓN", "bag", productsBag)}
      {renderProducts("GIÀY", "sandals", productsSandals)}
    </main>
  );
}
