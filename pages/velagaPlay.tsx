import React from "react";
import Image from "next/image";
import velagaLogo from "../public/velaga/velagaLogo.png";
import useGetNickname from "hooks/useGetNickname";

const velagaPlay = () => {
  const nickname = useGetNickname();
  return (
    <div className="wrapper">
      <h3 className="fixed top-5 left-5">{nickname}님</h3>
      <div className="w-1/4 relative">
        <Image src={velagaLogo} layout="responsive" objectFit="contain" />
      </div>
      <h4>조작 방법 : 키보드 좌우키로 VSCode를 움직여서 Error를 무찌르세요!</h4>
    </div>
  );
};

export default velagaPlay;
