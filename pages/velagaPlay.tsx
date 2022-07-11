import React, { useState } from "react";
import Image from "next/image";
import velagaLogo from "../public/velaga/velagaLogo.png";
import useGetNickname from "hooks/useGetNickname";
import Player from "components/velaga/Player";

const velagaPlay = () => {
  // 키보드 키 누르면 이동하는 함수
  const [positionX, setPositionX] = useState<number>(0);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const key = e.code;
    switch (key) {
      case "ArrowLeft": {
        setPositionX(positionX - 10);
        break;
      }
      case "ArrowRight": {
        setPositionX(positionX + 10);
        break;
      }
    }
  };
  // ㅣocalStorage에서 닉네임 가져오는 custom hook
  const nickname = useGetNickname();
  return (
    <div className="wrapper h-screen" onKeyDown={handleKeyPress} tabIndex={0}>
      <h4 className="fixed top-5 left-5">{nickname}님</h4>
      <div className="w-1/6 mb-5 fixed top-0">
        <Image src={velagaLogo} layout="responsive" objectFit="contain" />
      </div>

      <div className="fixed top-28 w-[800px] h-[800px] border-10 border-velaga_green z-20 overflow-hidden">
        <div className="w-[1600px] h-[800px] z-10 ml-[-400px]"></div>
        <div className="absolute bottom-0 w-full h-[100px] flex justify-center p-0">
          <Player positionX={positionX} />
        </div>
      </div>
      <h4 className="mt-5 fixed bottom-0">
        조작 방법 : 키보드 좌우키로 VSCode를 움직여서 Error를 무찌르세요!
      </h4>
    </div>
  );
};

export default velagaPlay;
