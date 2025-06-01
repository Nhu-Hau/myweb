import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-[160px] sm:pt-[70px] md:pt-[110px] lg:pt-[125px] overflow-hidden">
      <Header />
        <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
