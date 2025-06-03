import Image from "next/image";
export default function ProductCard({ product, formatPrice }) {
  const salePrice = product.price * (1 - product.discountPercentage / 100);
  const isOnSale = product.discountPercentage > 0;

  return (
    <>
      <article
        key={product.id}
        className="relative group overflow-hidden shadow-sm shadow-top hover:shadow-lg transition"
      >
        <figure className="overflow-hidden rounded-lg aspect-[2.5/3] relative">
          <Image
            src={product.thumbnail}
            alt={`Hình ảnh sản phẩm: ${product.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain transition group-hover:scale-105 group-hover:brightness-90"
          />
        </figure>
        <h3 className="text-[10px] sm:text-xs md:text-sm font-medium mt-2 line-clamp-2">
          {product.title.toUpperCase()}
        </h3>
        <div>
          {isOnSale ? (
            <div className="flex items-center gap-2">
              <p className="text-gray-500 line-through text-xs md:text-sm ">
                {formatPrice(product.price)}
              </p>
              <p className="text-red-500 flex gap-2 text-xs sm:text-sm font-medium">
                {formatPrice(Math.round(salePrice))}
              </p>
            </div>
          ) : (
            <p className="text-gray-700 font-medium text-xs md:text-sm">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
        {/* <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
        {product.inStock ? "Còn hàng" : "Hết hàng"}
      </div> */}
      </article>
    </>
  );
}
