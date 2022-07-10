import type { NextPage } from "next";
import Seo from "../shared/Seo";
import Image from "next/image";
import reactLogo from "../public/main/reactLogo.png";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="wrapper border-blue">
      <Seo title="Home" />
      <Image src={reactLogo} width={500} height={500} />
      <h1>리액트 게임 천국</h1>
      <h3 className="absolute top-10 left-40">*</h3>
      <h3 className="absolute top-50 left-80">*</h3>
      <h3 className="absolute bottom-10 left-12">*</h3>
      <h3 className="absolute bottom-10 right-20">*</h3>
      <h3 className="absolute top-20 right-32">*</h3>
      <h3 className="absolute top-50 right-96">*</h3>
      <h3 className="absolute bottom-48 right-128">*</h3>
      <h3 className="absolute bottom-56 left-128">*</h3>
      <h3 className="absolute top-28 left-128">*</h3>
      <h3 className="absolute top-28 right-128">*</h3>

      <h3>React Game Heaven</h3>
      <div
        className="flex items-center justify-center mt-16 hover animate-bounce"
        onClick={() => router.push("/signIn")}
      >
        <h2>Insert</h2>
        <h2 className="text-yellow ml-7"> Coin</h2>
      </div>
    </div>
  );
};

export default Home;
