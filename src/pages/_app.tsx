import "@src/components/Banner/BannerPage/styles.less";
import "@src/components/Carousels/carousels.less";
import "@src/layouts/footer/styles.less";
import Layout from "@src/layouts/layouts";
import "@src/styles/banner.less";
import "@src/styles/contact.less";
import "@src/styles/faq.less";
import "@src/styles/global.less";
import "@src/styles/home.less";
import "@src/styles/investment.less";
import "@src/styles/menu.less";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*<Spinner />*/}

      <NextIntlClientProvider
        messages={pageProps.messages}
        onError={(error) => {
          /* Handle missing message... */
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlClientProvider>
    </>
  );
}
