import type { NextPage } from "next";
import Seo from "../shared/Seo";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Seo title="Home" />
      리액트 게임천국
    </div>
  );
};

export default Home;
