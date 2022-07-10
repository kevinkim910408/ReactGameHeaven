import type { NextPage } from "next";
import Seo from "../shared/Seo";
import db from "../shared/firebase";

const Home: NextPage = () => {
  console.log(db);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Seo title="Home" />
      리액트 게임천국 0근바보(opacity-0)
    </div>
  );
};

export default Home;
