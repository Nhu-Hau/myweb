import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-[63px] sm:pt-[39px] md:pt-[69px] xl:pt-[53px] overflow-hidden">
      <Header />
        <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
