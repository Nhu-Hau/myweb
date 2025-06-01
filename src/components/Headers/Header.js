import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import UserActions from "./UserActions";
import SocialIcons from "./SocialIcons";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Chào mừng bạn đến với cửa hàng của chúng tôi - Mua sắm sản phẩm chất lượng với giá tốt"
        />
        <meta
          name="keywords"
          content="cửa hàng, mua sắm, sản phẩm chất lượng, giỏ hàng, tài khoản"
        />
        <meta property="og:title" content="Trang chủ của Shop" />
        <meta
          property="og:description"
          content="Khám phá các sản phẩm chất lượng với giá tốt tại cửa hàng của chúng tôi."
        />
        <meta
          property="og:image"
          content="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/nhuhaulogo.png"
        />
        <meta property="og:url" content="https://hoangnhuhaushop.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hoangnhuhaushop.com/" />
        <title>NHShop</title>
      </Head>

      <header className="fixed top-0 w-full z-50 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-full mx-auto px-8">
          <Link href="/">
            <Image
              src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/nhuhaulogo.png"
              alt="Logo Shop Như Hậu - Chuyên sản phẩm chất lượng với giá tốt"
              width={1200}
              height={800}
              className="w-[144px] h-auto object-contain"
              loading="lazy"
            />
          </Link>

          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-1 mt-0">
            <div className="sm:flex sm:space-x-6 sm:items-center w-full">
              <SocialIcons />
              <UserActions />
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
