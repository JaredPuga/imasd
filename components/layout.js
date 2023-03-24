import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({children, title='', description = ''}) {
  return (
    <>
        <Head>
            <title>{`I+D - ${title}`}</title>
            <meta name="description" content={description}></meta>
        </Head>
        <Header />
            {children}
        <Footer />
    </>
  )
}

