import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";
import UserActions from "./UserActions";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white flex items-center px-0 sm:px-2 md:px-4 max-w-full flex-wrap sm:flex-nowrap">
      <div className="flex items-center">
        <Link href="/">
          <div className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[120px] 2xl:w-[140px] h-auto object-cover">
            <Image
              src="https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/nhuhaulogo.png"
              alt="Logo Shop Như Hậu - Chuyên sản phẩm chất lượng với giá tốt"
              width={1200}
              height={800}
              className=""
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center w-full justify-between mt-1 sm:mt-0">
        <NavBar />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
