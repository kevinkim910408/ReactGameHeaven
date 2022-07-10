import React from "react";
import Image from "next/image";
import velagaLogo from "../public/velaga/velagaLogo.png";
import BackBtn from "components/backBtn";
import useRouteHandler from "hooks/useRouteHandler";

const velagaMain = () => {
  const route = useRouteHandler();
  return (
    <div className="wrapper space-y-20">
      <BackBtn />
      <div className="w-2/3 relative">
        <Image src={velagaLogo} layout="responsive" objectFit="contain" />
      </div>
      <h2>벨로그 포스팅 전, 오류를 잡아라!</h2>
      <div className="space-x-20 animate-pulse">
        <button className="hover">
          <h2>START</h2>
        </button>
        <button className="hover" onClick={() => route("/velagaRanking")}>
          <h2>RANKING</h2>
        </button>
      </div>
    </div>
  );
};

export default velagaMain;
