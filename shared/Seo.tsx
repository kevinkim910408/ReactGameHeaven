import Head from "next/head";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | 리액트게임천국</title>
    </Head>
  );
};

export default Seo;
