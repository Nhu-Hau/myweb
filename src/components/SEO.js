import Head from "next/head";

export default function SEO({
  title = "NuHauShop - Cửa Hàng Thời Trang",
  description = "Khám phá các sản phẩm thời trang mới nhất tại NhuHauShop.",
  image = "/favicon.png",
  url = "https://NuHauShop.com",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    image,
    url,
    publisher: {
      "@type": "Organization",
      name: "NuHau&Co.",
      logo: {
        "@type": "ImageObject",
        url: image,
      },
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="giày, túi xách, thời trang nam, nữ, unisex, phụ kiện" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
