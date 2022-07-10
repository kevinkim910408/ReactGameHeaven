import Stars from "components/velaga/Stars";
import useRouteHandler from "hooks/useRouteHandler";
import { useEffect, useState } from "react";

const gameList = () => {
  const route = useRouteHandler();
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const localStorageNickname = localStorage.getItem("nickname");
    if (localStorageNickname !== null) {
      setNickname(localStorageNickname);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black relative">
      <h3 className="fixed top-5 left-5">Hello, {nickname}님!</h3>
      <Stars />
      <span className="text-100 text-white">게 임</span>
      <div
        className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black"
        onClick={() => route("/velagaMain")}
      >
        <span className="text-50">V E L A G A</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
    </div>
  );
};

export default gameList;
